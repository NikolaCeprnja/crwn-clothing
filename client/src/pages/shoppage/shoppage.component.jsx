import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import CollectionPageContainer from '../../pages/collectionpage/collectionpage.container';
import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';

const ShopPage = ({ fetchCollectionsStartAsync, collections, match }) => {
	useEffect(
		() => {
			if (collections === null) {
				fetchCollectionsStartAsync();
			}
		},
		[ fetchCollectionsStartAsync, collections ]
	);

	return (
		<div>
			<Route exact path={`${match.url}`} component={CollectionsOverviewContainer} />
			<Route exact path={`${match.url}/:collectionUrlParam`} component={CollectionPageContainer} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
