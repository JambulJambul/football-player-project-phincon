import { produce } from 'immer';

import { SET_LOGIN, SET_TOKEN, SET_USER_DETAILS } from '@containers/Client/constants';

export const initialState = {
  login: false,
  token: null,
  userDetails: null
};

export const storedKey = ['token', 'login', 'userDetails'];

const clientReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
      case SET_USER_DETAILS:
        draft.userDetails = action.userDetails;
        break;
    }
  });

export default clientReducer;
