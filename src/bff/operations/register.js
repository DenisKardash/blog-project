import { sessions } from '../sessions';
import { getUser, addUser } from '../api';

export const register = async (regLogin, regPassword) => {
	const existedUser = await getUser(regLogin); // существующий пользователь

	if (existedUser) {
		return {
			error: 'this login is used',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword); // добавим

	// console.log('from addUser', user)

	return {
		error: null,

		// НЕПОНЯТНЫЙ ВОПРОС (---ВФДАВАЛ ОШИБКУ---)
		res: {
			id: user.id, // не мог прочитать
			login: user.login, // не мог прочитать
			roleId: user.role_id, // не мог прочитать
			session: sessions.create(user),
		},
	};
};
