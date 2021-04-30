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
    main: '',
    secondary: '',
  },
};

const Theme = ({ children }: ThemeProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
