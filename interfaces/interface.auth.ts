export interface UserRegister {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface UserLogin {
	email: string;
	password: string;
}
