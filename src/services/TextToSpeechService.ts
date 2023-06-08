import * as signalR from "@microsoft/signalr";
import ApiManager from './ApiManager';
import TokenService from "authentication/TokenService";
import { SpeechItem } from "models/SpeechItem";
import { RootState, store } from "redux/store";
import { HubConnectionState } from "@microsoft/signalr";
import { useDispatch } from "react-redux";
import { addSpeechItem, setConnectionState, updateSpeechItem } from "redux/slices/speechItemsSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import IndexedDBService from "data/IndexedDBService";

class TextToSpeechService {
    connection: signalR.HubConnection;
    private broadcastChannel: BroadcastChannel;

    private static instance: TextToSpeechService;
    private isMaster: boolean = false;



    private storageEventListener: ((event: StorageEvent) => void) | null = null;
    private unloadEventListener: (() => void) | null = null;

    private dispatch: ThunkDispatch<RootState, {}, AnyAction> = useDispatch();


    private constructor() {
        const textToSpeechHubUrl = new URL('textToSpeechHub', ApiManager.BASE_URL);
        this.broadcastChannel = new BroadcastChannel('speechItemChannel');

        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(textToSpeechHubUrl.toString(), {
                accessTokenFactory: () => {
                    const token = TokenService.getAccessToken();
                    return token ? token : '';
                }
            })
            .configureLogging(signalR.LogLevel.Information)
            .withAutomaticReconnect([0, 1000, 2000])
            .build();
        this.handleReceivedSpeechItem = this.handleReceivedSpeechItem.bind(this);


    }

    public static getInstance(): TextToSpeechService {
        if (!TextToSpeechService.instance) {
            TextToSpeechService.instance = new TextToSpeechService();
        }
        return TextToSpeechService.instance;
    }
    private async initSignalR() {
        if (this.connection.state !== HubConnectionState.Disconnected) return;

        try {
            await this.connection.start();

            this.connection.on('ReceiveSpeechItem', this.handleReceivedSpeechItem);
            this.connection.onclose(() => store.dispatch(setConnectionState(HubConnectionState.Disconnected)));

            store.dispatch(setConnectionState(HubConnectionState.Connected));
        } catch (err) {
            console.log('Error while starting SignalR', err);
            setTimeout(() => this.initSignalR(), 5000);
        }
    }


    private async stopSignalR() {
        if (this.connection.state !== HubConnectionState.Connected) return;

        try {
            this.connection.off('ReceiveSpeechItem', this.handleReceivedSpeechItem);
            await this.connection.stop();

            console.log('SignalR Disconnected.');
            store.dispatch(setConnectionState(HubConnectionState.Disconnected));
        } catch (err) {
            console.log('Error while stopping SignalR', err);
            setTimeout(() => this.stopSignalR(), 5000);
        }
    }


    public async stop() {
        // Stop SignalR connection in all tabs
        await this.stopSignalR();

        // Remove master if this tab is the master
        if (localStorage.getItem('master')) {
            localStorage.removeItem('master');
        }

        // Remove storage event listener
        if (this.storageEventListener) {
            window.removeEventListener('storage', this.storageEventListener);
            this.storageEventListener = null;
        }
        if (this.unloadEventListener) {
            window.removeEventListener('unload', this.unloadEventListener);
            this.unloadEventListener = null;
        }
    }

    public async start() {
        // Start SignalR connection in all tabs
        await this.initSignalR();

        this.broadcastChannel.onmessage = (event) => {
            this.addNewItem(event.data);
        };

        // Check if this tab is the master, if not try to become the master
        if (!localStorage.getItem('master')) {
            await this.tryBecomeMaster();
        }

        // Listen to storage events in case the master tab is closed
        this.storageEventListener = async (event: StorageEvent) => {
            if (event.key === 'master' && !localStorage.getItem('master')) {
                await this.tryBecomeMaster();
            }
        };

        this.unloadEventListener = function () {
            // If this tab is the master, remove the 'master' key from localStorage
            if (localStorage.getItem('master')) {
                localStorage.removeItem('master');
            }
        };

        window.addEventListener('unload', this.unloadEventListener);

        window.addEventListener('storage', this.storageEventListener);

    }



    private async tryBecomeMaster() {
        const now = Date.now().toString();
        // Try to become the master
        localStorage.setItem('master', now);

        // Check if this tab is the master
        if (localStorage.getItem('master') === now) {
            this.isMaster = true;
        } else {
            this.isMaster = false;
        }
    }

    private async handleReceivedSpeechItem(speechItem: SpeechItem) {
        // Only store data if this tab is the master
        if (!this.isMaster) {
            return;
        }

        const item = await IndexedDBService.getInstance().saveAudioData(speechItem);
        this.broadcastChannel.postMessage(item);
        this.addNewItem(item!);
    }

    private addNewItem(item: SpeechItem) {
        // Dispatch the action to update redux store
        this.dispatch(addSpeechItem(this.convertAudioDataToUrl(item)));
    }
    private convertAudioDataToUrl = (speechItem: SpeechItem) => {
        if (!speechItem.audioData) {
            return speechItem; // or handle this case as per your requirement
        }

        const audioDataArray = Uint8Array.from(atob(speechItem.audioData), (c) =>
            c.charCodeAt(0)
        );
        const audioBlob = new Blob([audioDataArray.buffer], { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);


        return {
            ...speechItem,
            audioUrl,
        };
    };


    public async getAllLocalAudioData() {
        const items = await IndexedDBService.getInstance().getAudioData();
        if (!items) {
            return []; // or return null, as per your requirements
        }
        const convertedItems = items.map(this.convertAudioDataToUrl);
        return convertedItems;
    }

    public async updatePlayedSpeechItem(speechItem: SpeechItem) {
        // Save the speech item to IndexedDB

        const updatedItem = {
            ...speechItem,
            hasBeenPlayed: true,
        };

        const item = await IndexedDBService.getInstance().saveAudioData(updatedItem);
        this.dispatch(updateSpeechItem(item!));
    }

    async convertToSpeech(text: string) {
        await this.connection.invoke('ConvertToSpeech', text);
    }


    onReceiveError(callback: (errorMessage: string) => void) {
        this.connection.on('ReceiveError', callback);
    }

    offReceiveError(callback: (errorMessage: string) => void) {
        this.connection.off('ReceiveError', callback);
    }



}

export default TextToSpeechService;
