import { faker } from '@faker-js/faker';


export async function userFactory() {
    const password = faker.internet.password()
    const obj =  {
        email: faker.internet.email(),
        password: password,
        confirmPassword: password

    };
    return obj;
}

