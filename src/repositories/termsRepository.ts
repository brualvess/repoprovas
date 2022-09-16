import { prisma } from '../database';
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