import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlock,
	TotalPrice,
	TestWarning
} from './checkoutpage.styles';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<HeaderBlock>
				<span>Product</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Description</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Quantity</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Price</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Remove</span>
			</HeaderBlock>
		</CheckoutHeaderContainer>
		{cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
		<TotalPrice>
			<span>TOTAL: ${total}</span>
		</TotalPrice>
		<TestWarning>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
		</TestWarning>
		<StripeCheckoutButton price={total} disabled={total ? false : true} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
