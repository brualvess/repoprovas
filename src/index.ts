import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json } from 'express';
import router from './routes'
import "express-async-errors";
import errorhandler from './middlewares/errorHandler'



dotenv.config()

const app = express()
app.use(json());
app.use(cors());
app.use(router);
app.use(errorhandler)


export default app