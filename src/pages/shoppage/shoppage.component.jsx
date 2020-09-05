import React from 'react';
import { Route } from 'react-router-dom';

import { ShopPageContainer } from './shoppage.styles';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collectionpage/collectionpage.component';

const ShopPage = ({ match }) => (
	<ShopPageContainer>
		<Route exact path={`${match.url}`} component={CollectionOverview} />
		<Route exact path={`${match.url}/:collectionUrlParam`} component={CollectionPage} />
	</ShopPageContainer>
);

export default ShopPage;
