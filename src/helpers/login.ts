import { TOKEN_NAME } from 'constants/key';
import { UserModel } from 'types/user/user.model';
import { encrypt } from './encryption';

interface LoginInfoModel {
  email: string;
  password: string;
}

const login = (loginInfo: LoginInfoModel, users: UserModel[]): boolean => {
  const user = users.find((item) => item.email === loginInfo.email && item.password === loginInfo.password);
  if (user) {
    const token = encrypt(user);
    localStorage.setItem(TOKEN_NAME, token);
    return true;
  }
  return false;
};

export default login;
