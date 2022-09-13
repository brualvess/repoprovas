import { Request, Response } from "express"
import { ITests } from "../types/testsTypes.js"
import { createTests as create } from "../service/testsService.js"

export async function createTests(req: Request, res: Response) {
    const datas: ITests = req.body
    await create(datas);
    res.status(201).send('created test !')
}