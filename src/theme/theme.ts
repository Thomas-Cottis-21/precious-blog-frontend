import {createTheme, Theme} from "@mui/material";

export const theme: Theme = createTheme({
    typography: {
        h1: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontFamily: 'Playfair Display',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontFamily: 'Playfair Display',
        },
        subtitle1: {
            fontSize: '1.5rem',
            fontWeight: 'normal',
            textTransform: 'none',
            fontFamily: 'JosefinSans',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    margin: 5,
                    fontFamily: 'YesevaOne'
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