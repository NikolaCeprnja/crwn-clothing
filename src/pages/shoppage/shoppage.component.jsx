import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collectionpage/collectionpage.component';

import './shoppage.styles.scss';

const ShopPage = ({ match }) => (
	<div className='shoppage'>
		<Route exact path={`${match.url}`} component={CollectionOverview} />
		<Route exact path={`${match.url}/:collectionUrlParam`} component={CollectionPage} />
	</div>
);

export default ShopPage;
