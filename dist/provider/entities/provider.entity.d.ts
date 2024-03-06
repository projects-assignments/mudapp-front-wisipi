import { Ticket } from 'src/ticket/entities/ticket.entity';
export declare class Provider {
    id: number;
    providerName: string;
    password: string;
    email: string;
    name: string;
    lastname: string;
    vehicle: string;
    vehicleSize: string;
    origin: string;
    trip: string;
    availability: boolean;
    reviews: string;
    hashPassword(): Promise<void>;
    tickets: Ticket[];
}
