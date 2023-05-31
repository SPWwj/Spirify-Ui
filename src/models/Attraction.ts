import { Address } from "./Address";

export interface Attraction {
    id: number;
    publisherName?: string;
    publisherId?: string;
    name: string;
    overview: string;
    description?: string;
    image?: string;
    address: Address;
    price?: number;
    openingDate?: string;
    location?: string;
    category?: string;
    targetAudience?: string;
}