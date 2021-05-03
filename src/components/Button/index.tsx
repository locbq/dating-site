import React from 'react';
import BootstrapButton from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: 'primary' | 'secondary',
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const StyledButton = styled(BootstrapButton)`
  font-family: ${(props) => props.theme.typography.fontFamily.heading};
  transition: 0.25s ease-in-out;
  background-color: ${(props) => {
    if (props.variant === 'primary') return props.theme.colors.main;
  }};
  border-color: ${(props) => {
    if (props.variant === 'primary') return props.theme.colors.main;
  }};
  &: hover {
    background-color: ${(props) => {
    if (props.variant === 'primary') return props.theme.colors.mainDarker;
  }};
    border-color: ${(props) => {
    if (props.variant === 'primary') return props.theme.colors.mainDarker;
  }}
  };
  &: focus {
    box-shadow: none;
    background-color: ${(props) => {
    if (props.variant === 'primary') return props.theme.colors.mainDarker;
  }};
    border-color: ${(props) => {
    if (props.variant === 'primary') return props.theme.colors.mainDarker;
  }}
  };
  &: active {
    background-color: ${(props) => {
    if (props.variant === 'primary') return props.theme.colors.mainDarker;
  }} !important;
    border-color: ${(props) => {
    if (props.variant === 'primary') return props.theme.colors.mainDarker;
  }} !important; 
  };
`;

const Button = ({
  variant,
  loading,
  children,
  className,
  ...props
} : ButtonProps) => (
  <StyledButton
    variant={variant}
    className={className}
    {...props}
  >
    {loading ? <Spinner animation="border" /> : children}
  </StyledButton>
);

Button.defaultProps = {
  variant: 'primary',
  loading: false,
  children: <></>,
  className: '',
};

export default Button;
