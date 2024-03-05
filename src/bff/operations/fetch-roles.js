import { ROLE } from '../constants/index-NOT_USE';
import { getRoles } from '../api';
import { sessions } from '../sessions';

export const fetchRoles = async (userSession) => {
	const accessRoles = [ROLE.ADMIN]; // список ролей получает только АДМИН
	// проверка на права получения списка ролей
	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	const roles = await getRoles(); // запрос если имеет права получим список ролей

	return {
		error: null,
		res: roles,
	};
};
