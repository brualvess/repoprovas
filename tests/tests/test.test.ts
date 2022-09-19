import supertest from 'supertest';
import app from '../../src/index'
import { prisma } from '../../src/database';
import {
    testFactory
} from './testFactory'
import { userFactory } from '../users/userFactory'

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "tests"`;
});
const createTest = {
    name : 'DrivenEats',
    pdfUrl: 'driven@eats.com',
    categoryId: 1,
    teacherDisciplineId: 1,
  }
  const createTest2 = {
    name : 'ZapRecall',
    pdfUrl: 'zap@recall.com',
    categoryId: 1,
    teacherDisciplineId: 2,
  }
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

 describe('Testa GET/testTeacher ', () => {
     it('Deve retornar 200 e o body com as provas organizada por instrutores', async () => {
        let datasUser = await userFactory();
        await supertest(app).post('/signup').send(datasUser);
        datasUser = { ...datasUser, confirmPassword: undefined }
        const response = await supertest(app).post(`/signin`).send(datasUser);
        const token = response.text

     
      await supertest(app).post('/test').set({ Authorization: `Bearer ${token}` }).send(createTest);
     await supertest(app).post('/test').set({ Authorization: `Bearer ${token}` }).send(createTest2);

    const result = await supertest(app).get(`/testTeacher`).set({ Authorization: `Bearer ${token}` });

    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object);
 
    })

    
})


describe('Testa GET/testDiscipline ', () => {
    it('Deve retornar 200 e o body com as provas organizada por disciplina', async () => {
        let datasUser = await userFactory();
        await supertest(app).post('/signup').send(datasUser);
        datasUser = { ...datasUser, confirmPassword: undefined }
        const response = await supertest(app).post(`/signin`).send(datasUser);
        const token = response.text

     
      await supertest(app).post('/test').set({ Authorization: `Bearer ${token}` }).send(createTest);
     await supertest(app).post('/test').set({ Authorization: `Bearer ${token}` }).send(createTest2);

    const result = await supertest(app).get(`/testDiscipline`).set({ Authorization: `Bearer ${token}` });

    expect(result.status).toBe(200);
    expect(result.body).toBeInstanceOf(Object);
    })
      

   
})