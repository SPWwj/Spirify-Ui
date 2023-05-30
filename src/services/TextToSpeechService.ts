import * as signalR from "@microsoft/signalr";
import ApiManager from './ApiManager';
import TokenService from "authentication/TokenService";

class TextToSpeechService {
    connection: signalR.HubConnection;
    axiosInstance: any;

    private static instance: TextToSpeechService;

    private constructor() {
        this.axiosInstance = ApiManager.getInstance().getAxiosInstance();
        const textToSpeechHubUrl = new URL('textToSpeechHub', ApiManager.BASE_URL);


        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(textToSpeechHubUrl.toString(), {
                accessTokenFactory: () => {
                    const token = TokenService.getAccessToken();
                    return token ? token : '';
                }
            })
            .configureLogging(signalR.LogLevel.Information)
            .build();

        this.connection
            .start()
            .then(() => console.log('Connection started'))
            .catch(err => console.log('Error while starting connection: ' + err));
    }

    public static getInstance(): TextToSpeechService {
        if (!TextToSpeechService.instance) {
            TextToSpeechService.instance = new TextToSpeechService();
        }
        return TextToSpeechService.instance;
    }


    async convertToSpeechApi(text: string) {
        const response = await this.axiosInstance.post(`/api/TextToSpeech`, text, { responseType: 'arraybuffer' });
        return response.data;
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
