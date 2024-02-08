import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectAllPlayers = createSelector(selectHomeState, (state) => state.playerList);
export const selectAllClubs = createSelector(selectHomeState, (state) => state.clubList);