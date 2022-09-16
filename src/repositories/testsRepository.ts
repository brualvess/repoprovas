import { prisma } from '../database';
import { ITests } from '../types/testsTypes';

export async function create(datas: ITests) {
  await prisma.tests.create({ data: datas })
}
