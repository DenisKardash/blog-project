import { sessions } from '../sessions';
import { getUser } from '../api';

export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);

	if (!user) {
		return {
			error: 'User not found',
			//res - response
			res: null,
		};
	}

	const { id, login, password, roleId } = user;

	if (authPassword !== password) {
		return {
			error: 'password is incorrect',
			res: null,
		};
	}

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			// было так до корректировки формата данных
			// id: user.id,
			// login: user.login,
			// roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
