declare module 'react-native-geocoding' {
    type GeocoderOptions = {
        bounds: string;
        language: string;
        region: string;
        components: string;
    }

    export default class Geocoder {
        static init(apiKey: string, options?: GeocoderOptions): void;
        static isInit: boolean;
        static setApiKey(API_KEY: string): void;
        static from(...params: any[]): Promise<any>;
        static getFromLocation(address: string): Promise<any>;
        static getFromLatLng(lat: number, lng: number): Promise<any>;
    }
}
