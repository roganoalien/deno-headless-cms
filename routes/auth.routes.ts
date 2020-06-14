import { Router, Body } from 'https://deno.land/x/oak/mod.ts';
import { UserRegister } from '../interfaces/interface.auth.ts';
import * as authController from '../controllers/auth.controller.ts';
import { validateObject } from '../utils/validator.ts';

const router = new Router();

// TO DELETE
router.get('/login', ({ response }): void => {
	response.body = 'Login url';
});
// router.get('/users', authController.getUsers);
router.post('/register', authController.createUser);

// delete
router.post('/validate', async ({ request, response }) => {
	const body: Body = await request.body();
	const theUser: UserRegister = body.value;
	validateObject(theUser);
});

// router.post('/login', authController.login);
// router.post('/register', authController.register);

export default router;
