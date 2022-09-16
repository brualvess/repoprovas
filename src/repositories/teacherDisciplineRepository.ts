import { prisma } from '../database';

export async function findById(id: number){
    const result = await prisma.teachersDisciplines.findUnique({where:{id}})
    return result
}