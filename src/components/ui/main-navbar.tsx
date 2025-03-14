import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
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
                    {/*<IconButton*/}
                    {/*    color='primary'*/}
                    {/*>*/}
                    {/*    <MenuIcon />*/}
                    {/*</IconButton>*/}
                    <LocalFloristIcon sx={{ color: theme.palette.primary.main }} />
                    <Typography component="h1" variant="h6" color={theme.palette.text.primary}>
                        You are precious
                    </Typography>

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