import { Rdv } from "./rdv";

export class User{
    name: string;
    email: string;
    phone: number;
    password:string;
    id:number;
    role: string;
    rdvs:Rdv[];
}