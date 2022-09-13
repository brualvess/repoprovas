import { prisma } from '../database.js';
import { ITests } from '../types/testsTypes.js';

export async function create(datas:ITests){
  await prisma.tests.create({data:datas})
}