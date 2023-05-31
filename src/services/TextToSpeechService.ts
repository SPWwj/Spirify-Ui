import * as signalR from "@microsoft/signalr";
import ApiManager from './ApiManager';
import TokenService from "authentication/TokenService";

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
            .withAutomaticReconnect([0, 2000, 10000, 20000])
            .build();

    }

    public static getInstance(): TextToSpeechService {
        if (!TextToSpeechService.instance) {
            TextToSpeechService.instance = new TextToSpeechService();
        }
        return TextToSpeechService.instance;
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
