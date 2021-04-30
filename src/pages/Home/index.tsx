import React from 'react';

import Wrapper from 'components/Wrapper';
import {
  PATH_LOGIN,
  PATH_SIGN_UP,
} from 'routes/routes.paths';
import {
  StyledHeading4,
  StyledHeading1,
  StyledDivButtonContainer,
  StyledLink,
  StyledButton,
  StyledParagraph,
} from './styles';

const Home = () => (
  <Wrapper header="FIT.L♥ve">
    <StyledHeading4>Where the love begins</StyledHeading4>
    <StyledHeading1>Welcome!</StyledHeading1>
    <StyledDivButtonContainer>
      <StyledLink to={PATH_SIGN_UP}>
        <StyledButton variant="primary">Sign up for a new account</StyledButton>
      </StyledLink>
      <StyledLink to={PATH_LOGIN}>
        <StyledButton variant="primary">Login to an existing account</StyledButton>
      </StyledLink>
      <StyledLink to={PATH_LOGIN}>
        <StyledButton variant="primary">Check your matches</StyledButton>
      </StyledLink>
      <StyledParagraph>
        This page is for single Fitter to meet and date each other! <br />
        Type in your personal information and wait for the Fit.Love to begin! <br />
        Thank you for using our site.
      </StyledParagraph>
    </StyledDivButtonContainer>
  </Wrapper>
);

export default Home;
