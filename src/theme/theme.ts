import {createTheme, Theme} from "@mui/material";

export const theme: Theme = createTheme({
    typography: {
        fontFamily: [
            'AmaticSC',
            'Andika',
            'Playfair Display',
            'Alice',
            'JosefinSans',
            'YosevaOne'
        ].join(', '),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    margin: 5,
                    fontFamily: 'Playfair Display, roboto'
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#3a5a40'
        },
        secondary: {
            main: '#a3b18a'
        },
        background: {
            default: '#dad7cd'
        },
        text: {
            primary: '#2b2b2b'
        }
    }
});