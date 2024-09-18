export interface DataUser{
    name: string;
    email: string;
    address: Address;
}

interface Address {
    zone?: number;
    zipcode?: number; //? biar bikin optional
    city: string;
    province: string;
}