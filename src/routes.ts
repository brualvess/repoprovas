import { Router } from 'express';
import { authUser } from './middlewares/authUser.js';
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
import { schemaTests } from './schemas/testsSchema.js';
import {
    createTests,
    getTestsDiscipline,
    getTestTeacher
} from './controllers/testsControllers.js';

const router = Router()

//routes users
router.post('/signup', joiValidation(schemaSignup), signup)
router.post('/signin', joiValidation(schemaSignin), signin)
//routes tests
router.post('/test', authUser, joiValidation(schemaTests), createTests)
router.get('/testDiscipline', authUser, getTestsDiscipline)
router.get('/testTeacher', authUser, getTestTeacher)
export default router