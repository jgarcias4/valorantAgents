export interface SearchAgentsResponse {
    status: number;
    data:   Agent[];
}

export interface Agent {
    uuid:                      string;
    displayName:               string;
    description:               string;
    developerName:             string;
    characterTags:             string[] | null;
    displayIcon:               string;
    displayIconSmall:          string;
    bustPortrait:              null | string;
    fullPortrait:              null | string;
    killfeedPortrait:          string;
    assetPath:                 string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter:       boolean;
    isAvailableForTest:        boolean;
    isBaseContent:             boolean;
    role:                      Role | null;
    abilities:                 Ability[];
    voiceLine:                 VoiceLine;
}

export interface Ability {
    slot:        Slot;
    displayName: string;
    description: string;
    displayIcon: null | string;
}

export enum Slot {
    Ability1 = "Ability1",
    Ability2 = "Ability2",
    Grenade = "Grenade",
    Passive = "Passive",
    Ultimate = "Ultimate",
}

export interface Role {
    uuid:        string;
    displayName: DisplayName;
    description: string;
    displayIcon: string;
    assetPath:   string;
}

export enum DisplayName {
    Controller = "Controller",
    Duelist = "Duelist",
    Initiator = "Initiator",
    Sentinel = "Sentinel",
}

export interface VoiceLine {
    minDuration: number;
    maxDuration: number;
    mediaList:   MediaList[];
}

export interface MediaList {
    id:    number;
    wwise: string;
    wave:  string;
}
