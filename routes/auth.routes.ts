import { Router } from 'https://deno.land/x/oak/mod.ts';
import * as authController from '../controllers/auth.controller.ts';

const router = new Router();

// TO DELETE
router.get('/login', ({ response }): void => {
	response.body = 'Login url';
});
router.get('/users', authController.getUsers);
router.get('/register', ({ response }): void => {
	response.body = 'Register url';
});

// router.post('/login', authController.login);
// router.post('/register', authController.register);

export default router;
