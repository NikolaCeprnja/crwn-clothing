import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import Spinner from '../../components/spinner/spinner.component';
import ErrorPage from '../errorpage/errorpage.component';
const CollectionPageContainer = lazy(() => import('../../pages/collectionpage/collectionpage.container'));
const CollectionsOverviewContainer = lazy(() =>
	import('../../components/collection-overview/collections-overview.container')
);

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
			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route exact path={`${match.url}`} component={CollectionsOverviewContainer} />
					<Route
						exact
						path={`${match.url}/:collectionUrlParam`}
						component={CollectionPageContainer}
					/>
					<Route component={ErrorPage} />
				</Switch>
			</Suspense>
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
