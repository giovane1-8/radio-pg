import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
    
            white: string;
            lightGray: string;
            darkGray: string;
        
            black: string;
            black800: string;
            black600: string;
            black400: string;
            black200: string;
        }
    }
}