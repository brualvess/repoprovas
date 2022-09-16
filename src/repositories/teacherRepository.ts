import { prisma } from '../database.js';

export async function findAll() {
const response = await prisma.teachers.findMany({
    select:{
        name: true, 
        teacherDisciplines:{
            select:{
                id: true,
                discipline:{
                    select:{
                        name: true,

                    }
                }
            }
        }
    }
})
    return response
}
