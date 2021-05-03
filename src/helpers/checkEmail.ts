import { UserModel } from 'types/user/user.model';

const checkEmail = (email:string = '', users: UserModel[] = []) => users.some((user) => user.email === email);

export default checkEmail;
