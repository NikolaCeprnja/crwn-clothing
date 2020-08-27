import { createSelector } from 'reselect';

//input-selector takes whole reducer state and return only slice of it (usualy one layer deep)
const selectCart = state => state.cart;

//output/memoized selector
export const selectCartItems = createSelector([ selectCart ], cart => cart.cartItems);

export const selectCartItemsCount = createSelector([ selectCartItems ], cartItems =>
	cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);
