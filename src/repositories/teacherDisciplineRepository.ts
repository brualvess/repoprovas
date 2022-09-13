import { prisma } from '../database.js';

export async function findById(id: number){
    const result = await prisma.teachersDisciplines.findUnique({where:{id}})
    return result
}