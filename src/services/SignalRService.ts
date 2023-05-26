import * as signalR from "@microsoft/signalr";
import TokenService from "authentication/TokenService";

class SignalRService {
    connection: signalR.HubConnection;

    private static instance: SignalRService;

    private constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl("https://localhost:7162/chatHub", { 
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

    public static getInstance(): SignalRService {
        if (!SignalRService.instance) {
            SignalRService.instance = new SignalRService();
        }
        return SignalRService.instance;
    }

    registerOnServerEvents(onMessageReceived: (user: string, message: string) => void) {
        this.connection.on('ReceiveMessage', onMessageReceived);
    }
    removeOnServerEvents(onMessageReceived: (user: string, message: string) => void) {
        this.connection.off('ReceiveMessage', onMessageReceived);
    }
    
    send(user: string, message: string) {
        this.connection.invoke('SendMessage', user, message);
    }
}

export { SignalRService };
