import { authorize, logout, register } from './operations';

export const server = {
	authorize,
	logout,
	register,
	// register: register,
};

// ВЫДАЕТ ОШИБКУ

//ERROR Cannot read properties of undefined (reading 'id')
// TypeError: Cannot read properties of undefined (reading 'id')
// at Object.register (http://localhost:3000/static/js/bundle.js:515:18)

// ------------ ОТВЕТ !!!!!

// До этого мы получали User ---- для проверки (так же как и в авторизации)
// и но теперь у нас Пользоватекль еще не создан поэтому переделываем
