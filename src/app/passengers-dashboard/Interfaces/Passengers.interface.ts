import { Baggage } from './baggage.interface';

export interface Passengers {
    id: number;
    fullname: string;
    checkIn: boolean;
    checkInDate: number;
    baggage: Baggage[];
}
