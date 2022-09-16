import { IUsers } from "../types/usersTypes";
import bcrypt from 'bcrypt';
import {
    create,
    findByEmail
} from "../repositories/usersRepository";
import jwt from 'jsonwebtoken'

export async function createUser(datas: Omit<IUsers, "id">) {
    const email = await findByEmail(datas.email)
    if(email[0]){
        throw{type:'conflict'}
    }
    const passwordEncrypted = bcrypt.hashSync(datas.password, 10);
    const obj = {
        email: datas.email,
        password: passwordEncrypted
    }
    await create(obj)
}
export async function loginUser(datas: Omit<IUsers, "id">){
    const users = await findByEmail(datas.email)
    if(!users[0]){
        throw {type:'unauthorized'}
    }
    const verifyPassword = bcrypt.compareSync(datas.password, users[0].password)
    if(!verifyPassword){
        throw {type:'unauthorized'}
    }
    const token = jwt.sign(users[0].id.toString(), process.env.SECRET )
    return token;
}