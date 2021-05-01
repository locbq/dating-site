import {
  ADD_USERS,
  AddUsersAction,
} from 'types/action/action.model';
import { UserModel } from 'types/user/user.model';

export const addUsers = (users: UserModel[]): AddUsersAction => ({
  type: ADD_USERS,
  payload: users,
});
