// import { getUsers } from './get-users';

// export const getUser = async (loginToFind) => {
// 	const users = await getUsers();

// 	return users.find(({login}) => login === loginToFind);
// };

// export const getUser = async (loginToFind) =>
// 	fetch(`http://localhost:3005/users?login=${loginToFind}`)
// 		.then((loadedUsers) => loadedUsers.json()) // получим массив из пользователей
// 		.then(([loadedUser]) => loadedUser);
// деструктуризируем и вынемем нашего пользователя

export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3005/users?login=${loginToFind}`)
		.then((loadedUsers) => loadedUsers.json()) // получим массив из пользователей
		.then(
			([loadedUser]) =>
				loadedUser && {
					id: loadedUser.id,
					login: loadedUser.login,
					password: loadedUser.password,
					registeredAt: loadedUser.registed_at,
					roleId: loadedUser.role_id,
				},
		);