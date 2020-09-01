import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { removeAllItemsFromCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, removeAllItemsFromCart }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HMhEpBJRY8MEUGHJ7qEnyriR9YXyk4udyEum48RuUutUN7Iqx3FhG3LZt2zvC5lfn3KTg0nGR8oVFEutfsMqzew00K0xQ4uc7';

	const onToken = token => {
		console.log(token);
		removeAllItemsFromCart();
		alert('Payment Successful!');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='http://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

const mapDispatchToProps = dispatch => ({
	removeAllItemsFromCart: () => dispatch(removeAllItemsFromCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
