import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collectionpage.styles';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection: { title, items } }) => {
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map(item => <CollectionItem key={item.id} item={item} />)}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionUrlParam)(state)
});

export default connect(mapStateToProps)(CollectionPage);
