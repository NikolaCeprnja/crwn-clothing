import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { removeAllItemsFromCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, removeAllItemsFromCart }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51HMhEpBJRY8MEUGHJ7qEnyriR9YXyk4udyEum48RuUutUN7Iqx3FhG3LZt2zvC5lfn3KTg0nGR8oVFEutfsMqzew00K0xQ4uc7';

	const onToken = token => {
		axios({
			method: 'post',
			url: 'payment',
			data: {
				amount: priceForStripe,
				token
			}
		})
			.then(response => {
				alert('Payment Successful!');
				removeAllItemsFromCart();
			})
			.catch(err => {
				console.error('Payment error ', err);
				alert('There was an issue with you payment. Please make sure you use provided credit card.');
			});
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
