
export enum MessageType {
    Text = 0,
    Audio = 1
}

export interface SpeechItem {
    id?: number
    text: string;
    audioUrl?: string;
    audioData?: string;
    createdAt: Date;
    messageType: MessageType;
    hasBeenPlayed: boolean;
}
