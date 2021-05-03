import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Wrapper from 'components/Wrapper';
import {
  PATH_LOGIN,
  PATH_SIGN_UP,
  PATH_RESULT,
} from 'routes/routes.paths';
import { decrypt } from 'helpers/encryption';
import { TOKEN_NAME } from 'constants/key';
import {
  StyledHeading4,
  StyledHeading1,
  StyledDivButtonContainer,
  StyledLink,
  StyledButton,
} from './styles';

const Home = () => {
  const [isLoading, setIsLoading] = useState({
    logout: false,
    matches: false,
  });
  const history = useHistory();

  const token = localStorage.getItem(TOKEN_NAME) as string;
  const decryptedToken = token && decrypt(token);

  const handleLogout = (event) => {
    event.preventDefault();
    setIsLoading({ ...isLoading, logout: true });
    setTimeout(() => {
      setIsLoading({ ...isLoading, logout: false });
      localStorage.clear();
      history.push(PATH_LOGIN);
    }, 1000);
  };
  const handleCheckMatches = (event) => {
    event.preventDefault();
    setIsLoading({ ...isLoading, matches: true });
    setTimeout(() => {
      setIsLoading({ ...isLoading, matches: false });
      history.push(PATH_RESULT);
    }, 1000);
  };

  return (
    <Wrapper header="FIT.L♥ve">
      <StyledHeading4>Where the love begins</StyledHeading4>
      <StyledHeading1>Welcome!</StyledHeading1>
      <StyledDivButtonContainer>
        {!decryptedToken?.id || !decryptedToken?.email ? (
          <StyledLink to={PATH_SIGN_UP}>
            <StyledButton variant="primary">Sign up for a new account</StyledButton>
          </StyledLink>
        ) : null}
        {!decryptedToken?.id || !decryptedToken?.email ? (
          <StyledLink to={PATH_LOGIN}>
            <StyledButton variant="primary">Login to an existing account</StyledButton>
          </StyledLink>
        ) : (
          <StyledButton
            loading={isLoading.logout}
            variant="primary"
            onClick={handleLogout}
          >
            Logout of existing account
          </StyledButton>
        )}
        {decryptedToken?.id || decryptedToken?.email ? (
          <StyledButton
            loading={isLoading.matches}
            variant="primary"
            onClick={handleCheckMatches}
          >
            Check your matches
          </StyledButton>
        ) : null}
      </StyledDivButtonContainer>
    </Wrapper>
  );
};

export default Home;
