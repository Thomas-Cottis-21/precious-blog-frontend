import {AppBar, Box, Button, Container, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import {theme} from "../../theme/theme.ts";

export const MainNavBar = () => {
    return (
        <AppBar position="static" sx={{
            background: theme.palette.background.default,
            boxShadow: 'none',
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        color='primary'
                    >
                        <MenuIcon />
                    </IconButton>
                    <LocalFloristIcon />

                    <Box sx={{ flexGrow: 1 }}/>
                    <Box sx={{ display: {xs: 'none', md: 'flex'}, ms: 'auto'}}>
                        <Button color="primary" variant='text'>
                            Home
                        </Button>
                        <Button color="primary" variant="text">
                            About
                        </Button>
                        <Button color="primary" variant="outlined">
                            Log in
                        </Button>
                        <Button color="primary" variant="contained">
                            Sign up
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}