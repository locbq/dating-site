import { UserModel } from 'types/user/user.model';

interface GetMatchesProps {
  currentUser: UserModel;
  users: UserModel[];
}

const getMatches = (data: GetMatchesProps) => {
  const matches = data.users.filter((user) => (user.id !== data.currentUser.id)
  && (user.favoriteOs === data.currentUser.favoriteOs)
  && (user.personalityType === data.currentUser.personalityType)
  && (data.currentUser.minSeekingAge < user.age || data.currentUser.minSeekingAge === user.age)
  && (data.currentUser.maxSeekingAge > user.age || data.currentUser.maxSeekingAge === user.age));
  if (matches?.length > 0) return matches;
  return [];
};

export default getMatches;
