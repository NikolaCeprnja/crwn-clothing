import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const BackgroundImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const TextContainer = styled.span`width: 23%;`;

export const QuantityContainer = styled(TextContainer)`
        display: flex;

        .arrow {
            cursor: pointer;
        }

        .value {
            padding: 0 10px;
        }
`;

export const RemoveButton = styled.span`
	padding-left: 15px;
	cursor: pointer;

	@media screen and (max-width: 800px) {
		padding-left: unset;
		position: relative;
		right: 9px;
	}
`;
