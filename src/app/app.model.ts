export interface DataUserResp{
    name: string;
    data: DataUser[];
}

export interface DataUser{
    paymentDeadline: Date;
    username:        string;
    name:            string;
    email:           string;
    basicSalary:     string;
    city:            string;
    province:        string;
    zipcode:         string;
    isChecked?:       boolean;
    age:             number;
    id:              string;
}
