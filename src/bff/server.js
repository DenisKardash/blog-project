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
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'this login is used',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

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
};
