import { Router } from 'express';
import "express-async-errors";
import {
    signup,
    signin
} from './controllers/usersControllers.js';
import joiValidation from './middlewares/joiValidation.js';
import {
    schemaSignup,
    schemaSignin
} from './schemas/usersSchema.js';

const router = Router()

router.post('/signup',joiValidation(schemaSignup), signup)
router.post('/signin',joiValidation(schemaSignin), signin)

export default router