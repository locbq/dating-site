import React from 'react';
import {
  DefaultTheme,
  ThemeProvider,
} from 'styled-components';

interface ThemeProps {
  children: React.ReactNode;
}

const theme: DefaultTheme = {
  colors: {
    main: '#fd8b4b',
    mainDarker: '#fd7224',
    secondary: '#231d1f',
    danger: '#f5222d',
  },
  typography: {
    fontFamily: {
      heading: '"Montserrat", sans-serif',
      regular: '"Open Sans", sans-serif',
    },
  },
};

const Theme = ({ children }: ThemeProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
