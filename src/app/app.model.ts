export interface DataUser{
    name: string;
    email: string;
    address: Address;
}

interface Address {
    zipcode?: number; //? biar bikin optional
    city: string;
    province: string;
}