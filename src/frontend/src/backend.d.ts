import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Saree {
    id: bigint;
    name: string;
    isNewArrival: boolean;
    imageUrl: string;
    occasion: string;
    price: number;
    isOffer: boolean;
    fabric: string;
}
export interface backendInterface {
    addSaree(name: string, imageUrl: string, price: number, fabric: string, occasion: string, isOffer: boolean, isNewArrival: boolean): Promise<bigint>;
    getAllSarees(): Promise<Array<Saree>>;
    getNewArrivals(): Promise<Array<Saree>>;
    getOffers(): Promise<Array<Saree>>;
    getSaree(id: bigint): Promise<Saree>;
}
