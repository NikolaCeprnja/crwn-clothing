import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	button {
		margin-left: auto;
		margin-top: 50px;
	}

	@media screen and (max-width: 800px) {
		width: unset;

		button {
			margin: 50px auto;
		}
	}
`;

export const CheckoutHeaderContainer = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}

	@media screen and (max-width: 800px) {
		width: 25%;
		padding-left: 14px;

		&:last-child {
			width: 16%;
			padding-left: 0;
		}
	}
`;

export const TotalPrice = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;

	@media screen and (max-width: 800px) {
		margin-left: unset;
	}
`;

export const TestWarning = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 24px;
	color: red;
`;
