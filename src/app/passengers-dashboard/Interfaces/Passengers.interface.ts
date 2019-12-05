export interface Childern {
    name: string;
    age: number;
}

export interface Passengers {
    id: number;
    fullname: string;
    checkIn: boolean;
    children: Childern[];
}
