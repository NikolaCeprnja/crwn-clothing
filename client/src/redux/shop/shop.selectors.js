import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectIsCollectionsFetching = createSelector([ selectShop ], shop => shop.isFetching);

export const selectShopCollections = createSelector([ selectShop ], shop => shop.collections);

export const selectShopCollection = collectionUrlParam =>
	createSelector(
		[ selectShopCollections ],
		collections => (collections ? collections[collectionUrlParam] : null)
	);

export const selectShopCollectionsForPreview = createSelector(
	[ selectShopCollections ],
	collections => (collections ? Object.values(collections) : [])
);

export const selectIsCollectionsLoaded = createSelector([ selectShop ], shop => !!shop.collections);
