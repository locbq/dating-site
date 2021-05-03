import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      mainDarker: string;
      secondary: string;
      danger: string;
    };
    typography: {
      fontFamily: {
        heading: string;
        regular: string;
      }
    }
  }
}
