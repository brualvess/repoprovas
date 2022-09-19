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
                            tests:{
                               distinct: ['categoryId'],
                               select:{
                                category:{
                                    select:{
                                        name: true,
                                        tests:{
                                            select:{
                                                name: true,
                                                pdfUrl: true,
                                                teacherDisciplineId: true
                                            }
                                        }
                                    }
                                }
                               }
                            }

                        }
                    }
                }


            }

        }

    })
    return response
}