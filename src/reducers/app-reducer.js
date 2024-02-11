import { ACTION_TYPE } from "../actions";

const initialAppState = {
	wasLogout: false, // собственно сам флаг
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout, // меняем состояние у флага
			};
		//...
		default:
			return state;
	}
};
