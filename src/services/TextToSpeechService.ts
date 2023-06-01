import * as signalR from "@microsoft/signalr";
import ApiManager from './ApiManager';
import TokenService from "authentication/TokenService";
import IndexedDBService from "data/IndexedDBService";
import { SpeechItem } from "models/SpeechItem";

class TextToSpeechService {
    connection: signalR.HubConnection;

    private static instance: TextToSpeechService;

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

    public async start() {
        if (this.connection.state === signalR.HubConnectionState.Disconnected) {
            try {
                await this.connection.start();
                // console.log('SignalR Connected.');
                this.connection.on('ReceiveAudioData', this.handleReceivedAudioData);

            } catch (err) {
                console.log('Error while starting SignalR', err);
                // Restart connection after a delay.
                setTimeout(() => this.start(), 5000);
            }
        }
    }



    private async handleReceivedAudioData(audioData: string, text?: string) {
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
