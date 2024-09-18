export interface DataUser{
    name: string;
    email: string;
    address: Address;
    payment_deadline: Date,
    isCompleted: boolean
}

interface Address {
    zipcode?: number; //? biar bikin optional
    city: string;
    province: string;
}