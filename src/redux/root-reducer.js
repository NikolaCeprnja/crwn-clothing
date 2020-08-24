//we combine all of our reducers into one big obj with combineReducer and builds a state obj with the same shape
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});
