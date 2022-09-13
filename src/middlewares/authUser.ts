import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from "express";

dotenv.config();


export async function authUser(req:Request,res:Response,next:NextFunction){

	const { authorization } = req.headers;
	const token = authorization?.replace('Bearer ', '');

	if(!token) return res.sendStatus(401);

	const secret_key = process.env.SECRET;

	try {
		jwt.verify(token, secret_key, (err, userId:string) => {
			if(err) return res.sendStatus(403);
			//req.body.userId = parseInt(userId);
			next();
		});
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}
