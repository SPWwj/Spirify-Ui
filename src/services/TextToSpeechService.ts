import * as signalR from "@microsoft/signalr";
import ApiManager from './ApiManager';
import TokenService from "authentication/TokenService";
import IndexedDBService from "data/IndexedDBService";
import { SpeechItem } from "models/SpeechItem";

class TextToSpeechService {
    connection: signalR.HubConnection;

    private static instance: TextToSpeechService;
    private isMaster: boolean = false;

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
            .withAutomaticReconnect([0, 1000])
            .build();

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
                // console.log('SignalR Connected.');
                this.connection.on('ReceiveAudioData', this.handleReceivedAudioData.bind(this));

            } catch (err) {
                console.log('Error while starting SignalR', err);
                // Restart connection after a delay.
                setTimeout(() => this.start(), 5000);
            }
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
        window.addEventListener('storage', async (event) => {
            if (event.key === 'master' && !localStorage.getItem('master')) {
                await this.tryBecomeMaster();
            }
        });

        window.addEventListener('unload', function () {
            // If this tab is the master, remove the 'master' key from localStorage
            if (localStorage.getItem('master')) {
                localStorage.removeItem('master');
            }
        });
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

    private async handleReceivedAudioData(audioData: string, text?: string) {
        // Only store data if this tab is the master
        if (!this.isMaster) {
            return;
        }

        const audioArrayBuffer = Uint8Array.from(atob(audioData), (c) => c.charCodeAt(0));
        const speechItem: SpeechItem = { text: text || '', audioData: audioArrayBuffer };

        // Save to IndexedDB
        await IndexedDBService.getInstance().saveAudioData(speechItem);
    }



    async convertToSpeech(text: string) {
        await this.connection.invoke('ConvertToSpeech', text);
    }



    onReceiveAudioData(callback: (audioData: string, text?: string) => void) {
        this.connection.on('ReceiveAudioData', callback);
    }

    offReceiveAudioData(callback: (audioData: string, text?: string) => void) {
        this.connection.off('ReceiveAudioData', callback);
    }
    onReceiveError(callback: (errorMessage: string) => void) {
        this.connection.on('ReceiveError', callback);
    }

    offReceiveError(callback: (errorMessage: string) => void) {
        this.connection.off('ReceiveError', callback);
    }


}

export default TextToSpeechService;
