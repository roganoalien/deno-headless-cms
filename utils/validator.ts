import validator from 'https://deno.land/x/validator_deno/mod.ts';
import { UserRegister } from '../interfaces/interface.auth.ts';
import { User } from '../config/db.config.ts';

let globalPassword: string = '';

const switcher = (key: string, value: string) => {
	switch (key) {
		case 'name':
			console.log('NAME');
			if (validator.isEmpty(value)) {
				return 'Name cannot be empty!';
			} else {
				return null;
			}
		case 'email':
			console.log('EMAIL');
			if (validator.isEmpty(value)) {
				return 'Email cannot be empty!';
			} else {
				if (validator.isEmail(value)) {
					return null;
				} else {
					return 'The email does not have an email format!';
				}
			}
		case 'password':
			console.log('PASSWORD');
			if (validator.isEmpty(value)) {
				return 'Password cannot be empty!';
			} else {
				globalPassword = value;
				return null;
			}
		default:
			console.log('CONFIRM PASSWORD');
			if (!validator.equals(globalPassword, value)) {
				return 'Passwords are not equal! They need to match';
			} else {
				return null;
			}
	}
};

export const canContinue = async (email: string) => {
	const exists = await User.findOne({ email });
	if (!exists) {
		return true;
	} else {
		return false;
	}
};

export const validateObject = async (theObject: UserRegister) => {
	const errors = [];
	console.log(theObject);
	console.log(validator.isEmail('hola@hola.com'));
	for (let [key, value] of Object.entries(theObject)) {
		console.log('LLAVE', key);
		errors.push(switcher(key, value));
	}
	console.log(errors);
};
