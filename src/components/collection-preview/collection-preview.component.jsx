import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	CollectionPreviewContainer,
	CollectionTitle,
	CollectionItemPreview
} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items, match, history, routeName }) => (
	<CollectionPreviewContainer>
		<CollectionTitle onClick={() => history.push(`${match.url}/${routeName}`)}>{title}</CollectionTitle>
		<CollectionItemPreview>
			{items.filter((item, idx) => idx < 4).map(item => <CollectionItem key={item.id} item={item} />)}
		</CollectionItemPreview>
	</CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
