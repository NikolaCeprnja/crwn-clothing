import React from 'react';

import {
	CollectionPreviewContainer,
	CollectionTitle,
	CollectionItemPreview
} from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewContainer>
		<CollectionTitle>{title}</CollectionTitle>
		<CollectionItemPreview>
			{items.filter((item, idx) => idx < 4).map(item => <CollectionItem key={item.id} item={item} />)}
		</CollectionItemPreview>
	</CollectionPreviewContainer>
);

export default CollectionPreview;
