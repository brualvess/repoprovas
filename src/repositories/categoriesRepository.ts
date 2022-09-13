import { prisma } from '../database.js';

export async function findById(id: number){
    const result = await prisma.categories.findUnique({where:{id}})
    return result
}