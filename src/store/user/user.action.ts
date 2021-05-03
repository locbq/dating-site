import {
  ADD_USERS,
  UserActionTypes,
} from 'types/action/action.model';
import { UserModel } from 'types/user/user.model';

export const addUsers = (users: any[]): UserActionTypes => ({
  type: ADD_USERS,
  payload: users,
});
