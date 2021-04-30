import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
    };
    typography: {
      fontFamily: {
        heading: string;
        regular: string;
      }
    }
  }
}
