export interface IChagingStation {
    AddressInfo: IAddressInfo;
    Price: number;
    UsageCost: string;
    ID: number;
    Distance: number;
    TravelTime: number;
}

interface IAddressInfo {
    Title: string;
    Town: string;
    Postcode: string;
    Latitude: number;
    Longitude: number;
    ID: number;
    AccessComments: string;
    AddressLine1: string;
}
