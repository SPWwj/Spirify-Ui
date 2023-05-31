import * as signalR from "@microsoft/signalr";

import TextToSpeechService from "./TextToSpeechService";

class SignalRService {

    private static instance: SignalRService;
    textToSpeechService: TextToSpeechService;

    private constructor() {

        this.textToSpeechService = TextToSpeechService.getInstance();


    }
    public async startAllConnections() {
        this.textToSpeechService.start();
    }

    public async stopAllConnections() {
        await this.stopConnection(this.textToSpeechService.connection);
    }


    private async stopConnection(connection: signalR.HubConnection) {
        try {
            await connection.stop();
            console.log('Connection stopped');
        } catch (err) {
            console.log('Error while stopping connection: ' + err);
        }
    }


    public static getInstance(): SignalRService {
        if (!SignalRService.instance) {
            SignalRService.instance = new SignalRService();
        }
        return SignalRService.instance;
    }

}

export { SignalRService };
