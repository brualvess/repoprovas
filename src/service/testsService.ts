import { ITests } from "../types/testsTypes.js";
import { create } from "../repositories/testsRepository.js";
import { findById } from "../repositories/categoriesRepository.js";
import { findById as getById, } from "../repositories/teacherDisciplineRepository.js";
import { findAll } from "../repositories/termsRepository.js";
import { findAll as findTeacher } from "../repositories/teacherRepository.js";
import { findAll as categories } from "../repositories/categoriesRepository.js";
export async function createTests(datas: ITests) {
    const category = await findById(datas.categoryId)
    const teacherDiscipline = await getById(datas.teacherDisciplineId)
    if (!category) {
        throw { type: 'not_found' }
    }
    if (!teacherDiscipline) {
        throw { type: 'not_found' }
    }
    await create(datas);
}
export async function getByDisciplines() {
    const response = await findAll()
    return response
}
export async function getTestTeacher() {
    const response = await findTeacher()
    const res = await categories()
    const arrObj = response.map((item) => {
        const newArray = item.teacherDisciplines.map((td) => {
            return {
                id: td.id,
                discipline: td.discipline.name
            }
        })
        const categories = res.map((tdi) => {
            const tests = tdi.tests.filter((test) => newArray.find((a) => a.id === test.teacherDisciplineId))
            const testDiscipline = tests.map((tst) => {
                const discipline = newArray.find((disc) => disc.id === tst.teacherDisciplineId)
                return {
                    ...tst,
                    discipline: discipline.discipline
                }
            })
            return {
                category: tdi.name,
                tests: testDiscipline
            }
        })
        return {
            teacher: item.name,
            categories
        }

    })

    return arrObj
}