import styled from 'styled-components';

import { CustomButtonContainer } from '../custom-button/custom-button.styles';

export const BackgorundImageContainer = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	background-image: url(${({ imageUrl }) => imageUrl});
	margin-bottom: 5px;
`;

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	${CustomButtonContainer} {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	&:hover {
		${BackgorundImageContainer} {
			opacity: 0.8;
		}

		${CustomButtonContainer} {
			display: flex;
			opacity: 0.85;
		}
	}

	@media screen and (max-width: 800px) {
		width: 40vw;
		margin-bottom: 30px;

		${CustomButtonContainer} {
			display: block;
			opacity: 0.9;
			min-width: unset;
			padding: 0 10px;
		}

		&:hover {
			${BackgorundImageContainer} {
				opacity: unset;
			}

			${CustomButtonContainer} {
				opacity: 0.9;
			}
		}
	}
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const CollectionItemName = styled.span`margin-bottom: 15px;`;
