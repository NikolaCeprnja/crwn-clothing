import React from 'react';
import SHOP_DATA from './shop.data';
import './shoppage.styles.scss';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { collections: SHOP_DATA };
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shoppage">
				{collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
