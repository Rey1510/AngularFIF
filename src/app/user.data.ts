import { DataUser } from "./app.model";



export const userDataPublic: DataUser[] = [{
    name: 'Reyy',
      email: 'reynard@gmail.com',
      address: {
        city: 'Jakarta',
        province: 'Jaksel',
        zipcode: 1231312
      },
      payment_deadline: new Date(2024,8,19),
      isCompleted: false
    },
    {
        name: "Reyy2",
        email: "asda2@gm.com",
        address: {
            city: 'Jakarta2',
            province: 'Jaksel2',
            zipcode: 1231312,
         },
        payment_deadline: new Date(2024,8,23),
        isCompleted: false
    }]
      