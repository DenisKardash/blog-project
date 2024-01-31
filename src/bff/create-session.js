import { removeComment } from './session';
import { ROLE } from '../constants';

export const craeteSession = (roleId) => {
	
	const session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment; // добавим метод удаления
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment; // добавим метод удаления
			break;
		}
		case ROLE.READER: {
			// читатель удалять не может )))
			break;
		}
		default:
		// Ничего не делать
	}
	return session;
};
