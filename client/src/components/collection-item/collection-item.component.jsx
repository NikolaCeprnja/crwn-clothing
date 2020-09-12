import React from 'react';
import { connect } from 'react-redux';

import { addItemToCart } from '../../redux/cart/cart.actions';

import {
	CollectionItemContainer,
	BackgorundImageContainer,
	CollectionFooterContainer,
	CollectionItemName
} from './collection-item.styles';
import CustomButton from '../custom-button/custom-buttom.component';

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<CollectionItemContainer>
			<BackgorundImageContainer imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<CollectionItemName>{name}</CollectionItemName>
				<span className='price'>{price}$</span>
			</CollectionFooterContainer>
			<CustomButton inverted onClick={() => addItem(item)}>
				Add to cart
			</CustomButton>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
