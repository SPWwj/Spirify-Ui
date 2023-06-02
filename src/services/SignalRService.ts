import * as signalR from "@microsoft/signalr";
import TextToSpeechService from "./TextToSpeechService";

class SignalRService {
    private static instance: SignalRService;
    textToSpeechService: TextToSpeechService;

    private constructor() {
        this.textToSpeechService = TextToSpeechService.getInstance();
        // subscribe to the connection state change event of textToSpeechService
    }


    private subscribers: Array<(state: signalR.HubConnectionState) => void> = [];

    subscribeToConnectionState(subscriber: (state: signalR.HubConnectionState) => void): void {
        this.subscribers.push(subscriber);
    }

    unsubscribeFromConnectionState(subscriber: (state: signalR.HubConnectionState) => void): void {
        const index = this.subscribers.indexOf(subscriber);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    }

    private notifySubscribers(state: signalR.HubConnectionState): void {
        for (const subscriber of this.subscribers) {
            subscriber(state);
        }
    }

    public async startAllConnections() {
        this.textToSpeechService.start();
        this.notifySubscribers(this.textToSpeechService.connection.state);
    }

    public async stopAllConnections() {
        this.textToSpeechService.stop();
        this.notifySubscribers(this.textToSpeechService.connection.state);
    }


    public handleConnectionStateChange(state: signalR.HubConnectionState) {
        this.notifySubscribers(state);
    }



    public static getInstance(): SignalRService {
        if (!SignalRService.instance) {
            SignalRService.instance = new SignalRService();
        }
        return SignalRService.instance;
    }
}

export { SignalRService };
