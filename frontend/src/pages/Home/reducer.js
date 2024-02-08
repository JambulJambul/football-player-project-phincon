import { produce } from 'immer';

import { SET_ALL_PLAYERS, SET_ALL_CLUBS } from './constants';

export const initialState = {
  playerList: null,
  clubList: null
};

export const storedKey = [];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_PLAYERS:
        draft.playerList = action.playerList;
        break;
      case SET_ALL_CLUBS:
        draft.clubList = action.clubList;
        break;
    }
  });

export default homeReducer;
