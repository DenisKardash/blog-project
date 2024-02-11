import { ACTION_TYPE } from './action-type';
import { server } from '../bff';

export const logout = (session) => {
	server.logout(session); // тут наш ХЕШ (для сервера)

	return { type: ACTION_TYPE.LOGOUT };
};
