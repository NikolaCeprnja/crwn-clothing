import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shoppage.styles';
import CollectionPageContainer from '../../pages/collectionpage/collectionpage.container';
import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;

		fetchCollectionsStartAsync();
	}

	componentWillUnmount() {}

	render() {
		const { match } = this.props;

		return (
			<ShopPageContainer>
				<Route exact path={`${match.url}`} component={CollectionsOverviewContainer} />
				<Route exact path={`${match.url}/:collectionUrlParam`} component={CollectionPageContainer} />
			</ShopPageContainer>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
