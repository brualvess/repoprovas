import { prisma } from '../database.js';
export async function findAll() {
    const response = await prisma.terms.findMany({
        select: {
            number: true,
            disciplines: {
                select: {
                    name: true,
                    teacherDisciplines: {
                        select: {
                            teacher: {
                                select: {
                                    name: true
                                }
                            },
                            tests: true

                        }
                    }
                }


            }

        }

    })
    return response
}