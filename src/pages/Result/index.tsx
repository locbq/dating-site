import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Wrapper from 'components/Wrapper';
import { TOKEN_NAME } from 'constants/key';
import { decrypt } from 'helpers/encryption';
import getMatches from 'helpers/getMatches';
import useUsers from 'hooks/useUsers';
import { UserModel } from 'types/user/user.model';
import Pagination from 'components/Pagination';
import Match from './components/Match';
import { StyledHeading3 } from './styles';

const Result = () => {
  const token = localStorage.getItem(TOKEN_NAME) as string;
  const decryptedToken = token && decrypt(token);

  const [currentPage, setCurrentPage] = useState(1);
  const [matchesPerPage] = useState(2);
  const users = useUsers();
  const history = useHistory();

  useEffect(() => {
    if (!decryptedToken?.email || !decryptedToken?.password) {
      history.push('/');
    }
  }, [decryptedToken?.email, decryptedToken?.password, history]);

  const listOfMatches: UserModel[] = decryptedToken && getMatches({
    currentUser: decryptedToken,
    users,
  });

  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = listOfMatches.slice(indexOfFirstMatch, indexOfLastMatch);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Wrapper header={`Matches for ${decryptedToken?.name}`}>
      {currentMatches?.length > 0 ? (
        <>
          {currentMatches.map((match: UserModel) => (
            <Match
              key={match.id}
              user={match}
            />
          ))}
          <Pagination
            matchesPerPage={matchesPerPage}
            totalMatches={listOfMatches.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      ) : <StyledHeading3>Sorry, there is no match for you</StyledHeading3>}

    </Wrapper>
  );
};

export default Result;
