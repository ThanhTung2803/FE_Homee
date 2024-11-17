export interface Item {
    id: number;
    title: string;
    price: number;
    images: { uri: string }[];
    category: string;
    acreage: number;
    livingRoom: number;
    interior: string;
    maxOccupants: number;
    bedRoom: number;
    kitchen: number;
    parking: string;
    description: string;
}