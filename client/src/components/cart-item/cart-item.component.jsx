import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetails } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
	<CartItemContainer>
		<CartItemImage src={imageUrl} alt='item' />
		<ItemDetails>
			<span className='name'>{name}</span>
			<span className='price'>
				{quantity} x ${price}
			</span>
		</ItemDetails>
	</CartItemContainer>
);

export default React.memo(CartItem);
