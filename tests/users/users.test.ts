import supertest from 'supertest';
import app from '../../src/index'
import { prisma } from '../../src/database';
import { userFactory, IUser } from './userFactory'


describe('Testa POST/signup ', () => {
    it('Deve retornar 201, caso cadastre um usuário no formato certo', async () => {
        const datas = await userFactory()
        const result = await supertest(app).post('/signup').send(datas);

        const findSignup = await prisma.users.findUnique({
            where: { email: datas.email }
        });

        expect(result.status).toBe(201);
        expect(findSignup).not.toBeNull();
    })
    it('Deve retornar 409, caso tente cadastrar com um email já existente', async () => {
        const datas = await userFactory();

        await supertest(app).post(`/signup`).send(datas);
        const result = await supertest(app).post(`/signup`).send(datas);

        expect(result.status).toBe(409);
    })

    it('Deve retornar 422, caso falte enviar algum campo do body', async () => {
        let datas = await userFactory();
        let response = {...datas,password: undefined}
        let result = await supertest(app).post(`/signup`).send(response);

        expect(result.status).toBe(422);

        response = {...datas,email: undefined}
         result = await supertest(app).post(`/signup`).send(response);
        
        expect(result.status).toBe(422);
    })

})