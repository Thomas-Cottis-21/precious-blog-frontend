import {createTheme, Theme} from "@mui/material";

export const theme: Theme = createTheme({
    typography: {
        fontFamily: "Playfair Display, roboto",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    margin: 5
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