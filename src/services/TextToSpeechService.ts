import * as signalR from "@microsoft/signalr";
import ApiManager from './ApiManager';
import TokenService from "authentication/TokenService";
import IndexedDBService from "data/IndexedDBService";
import { SpeechItem } from "models/SpeechItem";
import { SignalRService } from "./SignalRService";

class TextToSpeechService {
    connection: signalR.HubConnection;

    private static instance: TextToSpeechService;
    private isMaster: boolean = false;

    private saveAudioDataCallback: ((item: SpeechItem) => void) | null = null;

    setSaveAudioDataCallback(callback: (item: SpeechItem) => void) {
        this.saveAudioDataCallback = callback;
    }
    private storageEventListener: ((event: StorageEvent) => void) | null = null;
    private unloadEventListener: (() => void) | null = null;

    connectionStateChangedCallbacks: ((state: signalR.HubConnectionState) => void)[] = [];
    private onCloseHandler: (() => void) | null = null;

    private constructor() {
        const textToSpeechHubUrl = new URL('textToSpeechHub', ApiManager.BASE_URL);

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
        if (this.connection.state === signalR.HubConnectionState.Disconnected) {
            try {
                await this.connection.start();
                this.connection.on('ReceiveSpeechItem', this.handleReceivedSpeechItem);
                this.onCloseHandler = () => {
                    SignalRService.getInstance().handleConnectionStateChange(this.connection.state);
                };

                this.connection.onclose(this.onCloseHandler);
            } catch (err) {
                console.log('Error while starting SignalR', err);
                setTimeout(() => this.start(), 5000);
            }
        }
    }

    private async stopSignalR() {
        if (this.connection.state === signalR.HubConnectionState.Connected) {
            try {
                this.connection.off('ReceiveSpeechItem', this.handleReceivedSpeechItem);
                if (this.onCloseHandler) {
                    this.connection.onclose(this.onCloseHandler);
                }
                await this.connection.stop();
                console.log('SignalR Disconnected.');
            } catch (err) {
                console.log('Error while stopping SignalR', err);
                setTimeout(() => this.stop(), 5000);
            }
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
        // Save to IndexedDB
        await IndexedDBService.getInstance().saveAudioData(speechItem);

        // Call the callback if it is set
        if (this.saveAudioDataCallback) {
            this.saveAudioDataCallback(speechItem);
        }
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
