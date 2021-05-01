import React from 'react';
import styled from 'styled-components';
import BootstrapAlert from 'react-bootstrap/Alert';

const StyledAlert = styled(BootstrapAlert)`
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
  background-color: ${(props) => {
    if (props.variant === 'danger') return props.theme.colors.danger;
  }};
  border-color: ${(props) => {
    if (props.variant === 'danger') return props.theme.colors.danger;
  }};
  color: ${(props) => {
    if (props.variant === 'danger') return '#ffffff';
  }};
  & > button {
    color: ${(props) => {
    if (props.variant === 'danger') return '#ffffff';
  }};
    opacity: ${(props) => {
    if (props.variant === 'danger') return '1';
  }};
  }
`;

const Alert = (props) => <StyledAlert {...props} />;

export default Alert;
