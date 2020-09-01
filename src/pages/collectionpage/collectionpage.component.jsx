import React from 'react';
import { connect } from 'react-redux';

import { selectShopCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collectionpage.styles.scss';

const CollectionPage = ({ collection: { title, items } }) => (
	<div className='collection-page'>
		<h2 className='title'>{title}</h2>
		<div className='items'>{items.map(item => <CollectionItem key={item.id} item={item} />)}</div>
	</div>
);

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionUrlParam)(state)
});

export default connect(mapStateToProps)(CollectionPage);
