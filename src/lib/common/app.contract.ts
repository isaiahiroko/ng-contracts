export interface SubscribeContract{
    email: string;
    filters?: string[];
    status: boolean;
}

export interface AppMetaContract{
    title: string;
    dateTime: string;
    version: string;
}
