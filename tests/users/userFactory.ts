import { faker } from '@faker-js/faker';

export interface IUser {
    email: string,
    password: string,
    confirmPassword: string
}

export async function userFactory() {
    const password = faker.internet.password()
    const obj:IUser =  {
        email: faker.internet.email(),
        password: password,
        confirmPassword: password

    };
    return obj;
}

