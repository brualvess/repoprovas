import supertest from 'supertest';
import app from '../../src/index'
import { prisma } from '../../src/database';
import {
    testFactory,
    testFactory2
} from './testFactory'
import { userFactory } from '../users/userFactory'

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "tests"`;
});
describe('Testa POST/test ', () => {
    it('Deve retornar 201 caso todos os dados estejam corretos', async () => {
        let datasUser = await userFactory();
        await supertest(app).post('/signup').send(datasUser);
        datasUser = { ...datasUser, confirmPassword: undefined }
        const response = await supertest(app).post(`/signin`).send(datasUser);
        const token = response.text


        const datas = await testFactory()
        const result = await supertest(app).post('/test').set({ Authorization: `Bearer ${token}` }).send(datas);
        const findTest = await prisma.tests.findFirst({
            where: { name: datas.name }
        })
        expect(result.status).toBe(201);
        expect(findTest).not.toBeNull();
    })

    it('Deve retornar 403 caso o token informado esteja errado', async () => {
        let datasUser = await userFactory();
        await supertest(app).post('/signup').send(datasUser);
        datasUser = { ...datasUser, confirmPassword: undefined }
        const response = await supertest(app).post(`/signin`).send(datasUser);
        const token = response.text


        const datas = await testFactory()
        const result = await supertest(app).post('/test').set({ Authorization: `Beare ${token}` }).send(datas);
    
        expect(result.status).toBe(403);
    })
})