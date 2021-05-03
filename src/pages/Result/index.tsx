import React from 'react';

import Wrapper from 'components/Wrapper';
import { TOKEN_NAME } from 'constants/key';
import { decrypt } from 'helpers/encryption';
import getMatches from 'helpers/getMatches';
import useUsers from 'hooks/useUsers';
import Match from './components/Match';

const Result = () => {
  const token = localStorage.getItem(TOKEN_NAME) as string;
  const decryptedToken = token && decrypt(token);
  const users = useUsers();

  const listOfMatches = getMatches({
    currentUser: decryptedToken,
    users,
  });

  return (
    <Wrapper header={`Matches for ${decryptedToken?.name}`}>
      {listOfMatches.map((match) => (
        <Match
          key={match.id}
          user={match}
        />
      ))}
    </Wrapper>
  );
};

export default Result;
