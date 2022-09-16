import { IUsers } from "../types/usersTypes";
import { prisma } from '../database';

export async function findByEmail(email: string){
    const result = await prisma.users.findMany({where:{email}})
    return result
}
export async function create(datas: Omit <IUsers, 'id'>){
    const result = await prisma.users.create({data:datas})
}