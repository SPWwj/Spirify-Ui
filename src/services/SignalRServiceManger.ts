import TextToSpeechService from "./TextToSpeechService";

class SignalRServiceManager {
    private static instance: SignalRServiceManager;
    textToSpeechService: TextToSpeechService;

    private constructor() {
        this.textToSpeechService = TextToSpeechService.getInstance();
        // subscribe to the connection state change event of textToSpeechService
    }

    public async startAllConnections() {
        this.textToSpeechService.start();
    }

    public async stopAllConnections() {
        this.textToSpeechService.stop();
    }

    public static getInstance(): SignalRServiceManager {
        if (!SignalRServiceManager.instance) {
            SignalRServiceManager.instance = new SignalRServiceManager();
        }
        return SignalRServiceManager.instance;
    }


    public removeConnectionHandlers() {
        this.textToSpeechService.connection.off('onclose');
        this.textToSpeechService.connection.off('onreconnected');
        this.textToSpeechService.connection.off('onreconnecting');
    }
}

export { SignalRServiceManager };
