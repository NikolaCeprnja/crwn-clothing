import userActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null
};

//represent the state for currently authenticated/logged in user
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
