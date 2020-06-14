import {
	RouterContext,
	Route,
	Body,
	Request,
	Response
} from 'https://deno.land/x/oak/mod.ts';
import * as bcrypt from 'https://deno.land/x/bcrypt/mod.ts';
import { db, User } from '../config/db.config.ts';
import { UserRegister } from '../interfaces/interface.auth.ts';
import { canContinue } from '../utils/validator.ts';

const adminsCollection = db.collection('admins');

// interface UserRegister {
// 	name: string;
// 	email: string;
// 	password: string;
// 	confirmPassword: string;
// }

export const createUser = async ({
	request,
	response
}: {
	request: Request;
	response: Response;
}) => {
	//-- Validates that the request has a body
	if (!request.hasBody) {
		response.status = 400;
		response.body = {
			status: 400,
			message: 'Request was not with the correct formar!'
		};
	}
	// Gets request body inside with interface UserRegister format
	const body: Body = await request.body();
	const theUser: UserRegister = body.value;
	// If that user email does not exists, procceeds
	const continues = await canContinue(theUser.email);
	if (continues) {
		// Encrypts and salts password
		const salt = await bcrypt.genSalt(10);
		const password = await bcrypt.hash(theUser.password, salt);
		// Save user in DB
		await User.insertOne({
			name: theUser.name,
			email: theUser.email,
			password
		});
		// Response
		response.status = 200;
		response.body = {
			status: 200,
			message: 'The user has been created!'
		};
	} else {
		// If the user already exits
		response.status = 400;
		response.body = {
			status: 400,
			message: 'The user already exists!'
		};
	}
};
