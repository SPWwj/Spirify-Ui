export interface ExtendedPropertyMap {
    IsHighQuality48K?: string;
}

export interface VoiceModel {
    Name: string;
    DisplayName: string;
    LocalName: string;
    ShortName: string;
    Gender: string;
    Locale: string;
    LocaleName: string;
    SampleRateHertz: string;
    VoiceType: string;
    Status: string;
    WordsPerMinute?: string;
    StyleList?: string[];
    SecondaryLocaleList?: string[];
    RolePlayList?: string[];
    audioUri?: string;
    avatarUri?: string;
}

export type VoiceModelArray = VoiceModel[];
