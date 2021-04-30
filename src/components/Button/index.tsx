import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

interface ButtonProps {
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const StyledButton = styled(BootstrapButton)`
  font-family: ${(props) => props.theme.typography.fontFamily.heading};
`;

const Button = ({
  children,
  loading,
  className,
} : ButtonProps,
{ props }) => (
  <StyledButton
    className={className}
    {...props}
  >
    {loading ? <Spinner animation="border" /> : children}
  </StyledButton>
);

Button.defaultProps = {
  loading: false,
  children: <></>,
  className: '',
};

export default Button;
