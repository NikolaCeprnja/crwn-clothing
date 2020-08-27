import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ cartItems, toggleCartHidden }) => {
	const itemsNum = cartItems.reduce((curNum, item) => curNum + item.quantity, 0);

	return (
		<div className='cart-icon' onClick={toggleCartHidden}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemsNum}</span>
		</div>
	);
};

const mapSatateToProps = ({ cart: { cartItems } }) => ({
	cartItems
});

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapSatateToProps, mapDispatchToProps)(CartIcon);
