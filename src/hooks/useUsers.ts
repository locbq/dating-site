import {
  useState,
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';

import { UserModel } from 'types/user/user.model';

const useUsers = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const currentUserList = useSelector((state: any) => state.user);

  useEffect(() => {
    setUsers(currentUserList);
  }, [currentUserList]);

  return users;
};

export default useUsers;
