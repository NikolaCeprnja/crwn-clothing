import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	@media screen and (max-width: 800px) {
		align-items: center;
		margin-bottom: 0;
	}
`;

export const CollectionTitle = styled.h1`
	font-size: 38px;
	text-transform: capitalize;
	cursor: pointer;
	width: fit-content;
	margin-bottom: 25px;
`;

export const CollectionItemPreview = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`;
