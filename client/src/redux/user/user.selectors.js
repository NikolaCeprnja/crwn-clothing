import { createSelector } from 'reselect';

const selectUsers = state => state.user;

export const selectCurrentUser = createSelector([ selectUsers ], user => user.currentUser);
