import { ITests } from "../types/testsTypes.js";
import { create } from "../repositories/testsRepository.js";
import { findById } from "../repositories/categoriesRepository.js";
import { findById as getById, }from "../repositories/teacherDisciplineRepository.js";
import { findAll } from "../repositories/termsRepository.js";

export async function createTests(datas: ITests){
    const category = await findById(datas.categoryId)
    const teacherDiscipline = await getById(datas.teacherDisciplineId)
    if(!category){
        throw{type:'not_found'}
    }
    if(!teacherDiscipline){
        throw{type:'not_found'}
    }
await create(datas);
}
export async function getByDisciplines(){
const response = await findAll()
return response
}