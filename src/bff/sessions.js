export const sessions = {
	list: {}, // список сессий
	create(user) {
		const hash = Math.random().toFixed(50); // создаем ХЭШ

		this.list[hash] = user; // добавляем ХЭШ в список

		return hash; // возвращаем ХЭШ
	},

	remove(hash) {
		delete this.list[hash];
	},
};
