import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, CartItemCount } from './cart-icon.styles';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ itemsCount, dispatch }) => (
	<CartIconContainer onClick={() => dispatch(toggleCartHidden())}>
		<ShoppingIcon className='shopping-icon' />
		<CartItemCount>{itemsCount}</CartItemCount>
	</CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
	itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(CartIcon);
