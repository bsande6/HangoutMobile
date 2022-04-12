import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    Stack,
} from "@mui/material";
import { Link } from "react-router-dom";

const MainAppBar = () => {

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Stack direction="row" spacing={4} align="right">
                    <Link to="/feed">
                        Home
                    </Link>
                    <Link to="/setstatus">
                        My Status
                    </Link>
                    <Link to="/friends">
                        Friends
                    </Link>
                    <Typography variant="h4">
                        Hangout App
                    </Typography>
                    <Link to="/profile">
                        Profile
                    </Link>
                    <Link to="/editprofile">
                        Settings
                    </Link>
                    <Link to="/">
                        Logout
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
export default MainAppBar;



/*import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {Link} from 'react-router-dom';
const pages = ["Feed", "Friends"];
const settings = ["Profile", "Settings", "Logout"];

const MainAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    >
                        Hangout
                    </Typography>
                    <Box sx={{ flexGrow: 1, alignItems: 'center', padding: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map((page) => (
                            <Button
                                variant='outlined'
                                color='primary'
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "black", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}>
                            <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>Settings</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MainAppBar;
*/
