import { UserModel } from 'types/user/user.model';

export interface AddUsersAction {
  type: typeof ADD_USERS;
  payload: UserModel[];
}

export const ADD_USERS = 'ADD_USERS';
