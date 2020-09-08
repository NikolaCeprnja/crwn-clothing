import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import { ShopPageContainer } from './shoppage.styles';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collectionpage/collectionpage.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;

		const collectionRef = firestore.collection('collections');

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			updateCollections(convertCollectionsSnapshotToMap(snapshot));
			this.setState({ loading: false });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromSnapshot();
		updateCollections(null);
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<ShopPageContainer>
				<Route
					exact
					path={`${match.url}`}
					render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
				/>
				<Route
					exact
					path={`${match.url}/:collectionUrlParam`}
					render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
				/>
			</ShopPageContainer>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
