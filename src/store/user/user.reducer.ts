import {
  ADD_USERS,
  UserActionTypes,
} from 'types/action/action.model';
import { UserModel } from 'types/user/user.model';

const initialState: UserModel[] = [];

const userReducer = (
  state = initialState,
  action: UserActionTypes,
) => {
  switch (action.type) {
    case ADD_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default userReducer;
