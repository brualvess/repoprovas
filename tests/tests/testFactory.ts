import { faker } from '@faker-js/faker';

export async function testFactory() {
    return {
        name: faker.lorem.word(10),
        pdfUrl: faker.internet.url(),
        categoryId: 1,
        teacherDisciplineId: 1,
    }
}
