import { Request, Response } from "express"
import { IUsers } from "../types/usersTypes"
import {
    createUser,
    loginUser
} from "../service/usersService"


export async function signup(req: Request, res: Response) {
    const datas: Omit<IUsers, "id"> = req.body
    await createUser(datas)
    res.status(201).send('User created !')
}
export async function signin(req: Request, res: Response) {
    const datas: Omit<IUsers, "id"> = req.body
    const response = await loginUser(datas)
    res.status(200).send(response)
}