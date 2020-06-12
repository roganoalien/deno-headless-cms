import { User } from '../config/db.config.ts';

export const canContinue = async (email: string) => {
	const exists = await User.findOne({ email });
	if (!exists) {
		return true;
	} else {
		return false;
	}
};
