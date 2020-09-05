import React from 'react';
import { connect } from 'react-redux';

import {
	CheckoutItemContainer,
	BackgroundImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButton
} from './checkout-item.styles';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CheckoutItemContainer>
			<BackgroundImageContainer>
				<img src={imageUrl} alt='item' />
			</BackgroundImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div className='arrow' onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</QuantityContainer>
			<TextContainer>${price}</TextContainer>
			<RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItemToCart(item)),
	removeItem: item => dispatch(removeItemFromCart(item)),
	clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
