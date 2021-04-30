import React from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { PATH_BASE } from 'routes/routes.paths';
import {
  StyledDiv,
  StyledDivHeader,
  StyledHeading2,
  StyledParagraph,
  StyledParagraphLink,
} from './styles';

interface WrapperProps {
  children: React.ReactNode;
  header?: string;
}

const Wrapper = ({ children, header }: WrapperProps) => {
  const location = useLocation();

  return (
    <StyledDiv>
      <StyledDivHeader>
        <StyledHeading2>{header}</StyledHeading2>
      </StyledDivHeader>
      {children}
      <StyledParagraph>
        This page is for single Fitter to meet and date each other! <br />
        Type in your personal information and wait for the Fit.Love to begin! <br />
        Thank you for using our site.
      </StyledParagraph>
      {location.pathname !== '/' && (
        <StyledParagraphLink>
          <Link to={PATH_BASE}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back to homepage
          </Link>
        </StyledParagraphLink>
      )}
    </StyledDiv>
  );
};

Wrapper.defaultProps = {
  header: '',
};

export default Wrapper;
