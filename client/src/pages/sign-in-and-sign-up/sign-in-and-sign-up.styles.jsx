import styled from 'styled-components';
import { SignUpContainer } from '../../components/sign-up/sign-up.styles';

export const SignUpLink = styled.span`
	display: inline-block;
	margin: 40px;
	font-size: 18px;
`;

export const SignInAndSignUpContainer = styled.div`
	width: 850px;
	margin: 30px auto;
	display: flex;
	justify-content: space-between;

	${SignUpLink} {
		display: none;
	}

	@media screen and (max-width: 800px) {
		width: unset;
		flex-direction: column;
		align-items: center;

		${SignUpContainer} {
			display: none;
		}

		${SignUpLink} {
			display: inline-block;

			a {
				padding-left: 5px;
				color: #4285f4;
			}
		}
	}
`;
