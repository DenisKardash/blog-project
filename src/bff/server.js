// 7,8,9
import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';

// import { craeteSession } from './create-session';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},

	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'User not found',
				//res - response
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'password is incorrect',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async register(regLogin, regPassword) {
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
	},
};

// ВЫДАЕТ ОШИБКУ

//ERROR Cannot read properties of undefined (reading 'id')
// TypeError: Cannot read properties of undefined (reading 'id')
// at Object.register (http://localhost:3000/static/js/bundle.js:515:18)

// ------------ ОТВЕТ !!!!!

// До этого мы получали User ---- для проверки (так же как и в авторизации)
// и но теперь у нас Пользоватекль еще не создан поэтому переделываем
