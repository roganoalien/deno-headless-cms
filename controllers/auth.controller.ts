import { RouterContext } from 'https://deno.land/x/oak/mod.ts';
import db from '../config/db.config.ts';
// import { v4 } from 'https://deno.land/std/uuid/mod.ts';

const adminsCollection = db.collection('admins');

interface Login {
	email: string;
	password: string;
}

interface UserRegister {
	email: string;
	password: string;
	confirmPassword: string;
}

export const getUsers = async (ctx: RouterContext) => {
	const users = await adminsCollection.find();
	ctx.response.body = {
		message: 'These are the users',
		users
	};
};

// export const login = async ({
// 	request,
// 	response
// }: {
// 	request: Request;
// 	response: Response;
// }) => {
// 	const body: Body = await request.body();
// 	if (!request.hasBody) {
// 		response.status = 404;
// 		response.body = {
// 			message: '¡Tanto el correo como el password son obligatorios'
// 		};
// 	} else {
// 		const user: Login = body.value;

// 		// VALIDATES USER IN DB
// 		// RESPONSE WITH TOKEN

// 		response.body = {
// 			message: '¡Bienvenido!',
// 			jwt: 'jdasjkghjfisdj'
// 		};
// 	}
// };

// export const register = async ({
// 	request,
// 	response
// }: {
// 	request: Request;
// 	response: Response;
// }) => {
// 	const body: Body = await request.body();

// 	if (!request.hasBody) {
// 		response.status = 404;
// 		response.body = {
// 			message: '¡Todos los datos son obligatorios!'
// 		};
// 	} else {
// 		const register: UserRegister = body.value;

// 		// ENCRYPT PASSWORD
// 		// SAVE USER WITH ENCRYPTED PASSWORD IN DB

// 		response.status = 200;
// 		response.body = {
// 			message: '¡El usuario fue creado!'
// 		};
// 	}
// };
