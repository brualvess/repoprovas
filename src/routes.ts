import { Router } from 'express';
import { authUser } from './middlewares/authUser';
import "express-async-errors";
import {
    signup,
    signin
} from './controllers/usersControllers';
import joiValidation from './middlewares/joiValidation';
import {
    schemaSignup,
    schemaSignin
} from './schemas/usersSchema';
import { schemaTests } from './schemas/testsSchema';
import {
    createTests,
    getTestsDiscipline,
    getTestTeacher
} from './controllers/testsControllers';

const router = Router()

//routes users
router.post('/signup', joiValidation(schemaSignup), signup)
router.post('/signin', joiValidation(schemaSignin), signin)
//routes tests
router.post('/test', authUser, joiValidation(schemaTests), createTests)
router.get('/testDiscipline', authUser, getTestsDiscipline)
router.get('/testTeacher', authUser, getTestTeacher)
export default router