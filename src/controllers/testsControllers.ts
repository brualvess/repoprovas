import { Request, Response } from "express"
import { ITests } from "../types/testsTypes.js"
import { createTests as create } from "../service/testsService.js"
import {
    getByDisciplines,
    getTestTeacher as testTeach
} from "../service/testsService.js"

export async function createTests(req: Request, res: Response) {
    const datas: ITests = req.body
    await create(datas);
    res.status(201).send('created test !')
}
export async function getTestsDiscipline(req: Request, res: Response) {
    const response = await getByDisciplines()
    res.status(200).send(response)
}
export async function getTestTeacher(req: Request, res: Response) {
    const response = await testTeach()
    res.status(200).send(response)
}