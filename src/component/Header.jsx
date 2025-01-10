"use client";
import * as React from "react";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import EventIcon from "@mui/icons-material/Event";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppBar from "@mui/material/AppBar";
import { usePathname } from "next/navigation";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Divider, TextField } from "@mui/material";
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import LocalActivitySharpIcon from '@mui/icons-material/LocalActivitySharp';
import PlayCircleSharpIcon from '@mui/icons-material/PlayCircleSharp';
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

const Header = ({ onMenuToggle }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "right",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "right",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{
                mt: 6,
                p: 2,
                pt: 0,
                "& .MuiMenu-paper": {
                    bgcolor: "#f8f9fb",
                    position: "absolute",
                    right: 0,
                    width: 600,
                    height: "500px",
                    overflow: "auto",
                    p: 2,
                    pt: 0,
                    zIndex: 5,
                    transform: "translateX(160px) !important",
                },
            }}
        >
            {/* Sticky Typography as Menu title */}
            <Typography
                sx={{
                    py: 1,
                    px: 1,
                    bgcolor: "#f8f9fb",
                    position: "sticky",
                    top: 0,
                    zIndex: 3,
                    width: "100%",
                    fontWeight: 600,
                }}
                component="div"
                variant="h5"
            >
                Menu
            </Typography>

            {/* Menu Content */}
            <Grid container spacing={2}>
                <Grid
                    size={8}
                    sx={{
                        bgcolor: "#fff",
                        borderRadius: "10px",
                        p: 1,
                    }}
                >
                    <Box
                        sx={{
                            p: 1,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "start",
                            flexDirection: "column",
                        }}
                    >
                        <TextField sx={{
                            "& .MuiOutlinedInput-root": {
                                outline:"none",
                                "& fieldset": {
                                    borderColor: "#0f0f0f", // Default border color
                                },
                                "&:hover fieldset": {
                                    borderColor: "#0f0f0f", 
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#0f0f0f", // Border color on focus
                                },
                            },
                        }} size="small" placeholder="Search" />
                        <Typography sx={{ my: 2 }}>Social</Typography>

                        {/* Link with MenuItem for Blogs */}
                        <Link href="/blog">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    p: 1,
                                    "&:hover": {
                                        backgroundColor: "#e2e5e9",
                                        borderRadius: "10px",
                                    },
                                }}
                            >
                                <IconButton size="large" color="inherit">
                                    <EventIcon />
                                </IconButton>
                                <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                                    <MenuItem
                                        sx={{
                                            padding: 0,
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                            },
                                        }}
                                    >
                                        Blogs
                                    </MenuItem>
                                    <Typography component="span" variant="body2" sx={{ mt: 1 }}>
                                        Organize or find events and other things to do online and
                                        nearby.
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>

                        <Link href="/blog">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    p: 1,
                                    "&:hover": {
                                        backgroundColor: "#e2e5e9",
                                        borderRadius: "10px",
                                    },
                                }}
                            >
                                <IconButton size="large" color="inherit">
                                    <EventIcon />
                                </IconButton>
                                <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                                    <MenuItem
                                        sx={{
                                            padding: 0,
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                            },
                                        }}
                                    >
                                        Videos
                                    </MenuItem>
                                    <Typography component="span" variant="body2" sx={{ mt: 1 }}>
                                        Explore various videos and events happening around you.
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>

                        <Link href="/feed">
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    p: 1,
                                    "&:hover": {
                                        backgroundColor: "#e2e5e9",
                                        borderRadius: "10px",
                                    },
                                }}
                            >
                                <IconButton size="large" color="inherit">
                                    <EventIcon />
                                </IconButton>
                                <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                                    <MenuItem
                                        sx={{
                                            padding: 0,
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                            },
                                        }}
                                    >
                                        Feed
                                    </MenuItem>
                                    <Typography component="span" variant="body2" sx={{ mt: 1 }}>
                                        Explore various videos and events happening around you.
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                </Grid>

                <Grid
                    size={4}
                    sx={{
                        bgcolor: "#fff",
                        borderRadius: "10px",
                        p: 2,
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: "600", mb: 2 }}>
                        Create
                    </Typography>
                    <Link href="#">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 1,
                                "&:hover": {
                                    backgroundColor: "#e2e5e9",
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            <IconButton
                                size="large"
                                sx={{
                                    boxShadow: "none",
                                    "&:hover": {

                                        boxShadow: "none",
                                    },
                                    p: 1,
                                    bgcolor: "#e2e5e9"
                                }}
                                color="inherit"
                            >
                                <DriveFileRenameOutlineSharpIcon />
                            </IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                                <Typography component="span"
                                    sx={{
                                        padding: 0,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    Post
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    <Link href="#">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 1,
                                "&:hover": {
                                    backgroundColor: "#e2e5e9",
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            <IconButton
                                size="large"
                                sx={{
                                    boxShadow: "none",
                                    "&:hover": {

                                        boxShadow: "none",
                                    },
                                    p: 1,
                                    bgcolor: "#e2e5e9"
                                }}
                                color="inherit"
                            >
                                <AutoStoriesSharpIcon />
                            </IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                                <Typography component="span"
                                    sx={{
                                        padding: 0,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    Story
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    <Link href="#">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 1,
                                "&:hover": {
                                    backgroundColor: "#e2e5e9",
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            <IconButton
                                size="large"
                                sx={{
                                    boxShadow: "none",
                                    "&:hover": {

                                        boxShadow: "none",
                                    },
                                    p: 1,
                                    bgcolor: "#e2e5e9"
                                }}
                                color="inherit"
                            >
                                <PlayCircleSharpIcon />
                            </IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                                <Typography component="span"
                                    sx={{
                                        padding: 0,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    Reel
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
                    <Link href="#">
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                p: 1,
                                "&:hover": {
                                    backgroundColor: "#e2e5e9",
                                    borderRadius: "10px",
                                },
                            }}
                        >
                            <IconButton
                                size="large"
                                sx={{
                                    boxShadow: "none",
                                    "&:hover": {

                                        boxShadow: "none",
                                    },
                                    p: 1,
                                    bgcolor: "#e2e5e9"
                                }}
                                color="inherit"
                            >
                                <LocalActivitySharpIcon />
                            </IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                                <Typography component="span"
                                    sx={{
                                        padding: 0,
                                        "&:hover": {
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    Life Event
                                </Typography>
                            </Box>
                        </Box>
                    </Link>
            
                    <Divider />
                </Grid>
            </Grid>
            

        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    const pathname = usePathname();

    const showHeader = pathname !== "/dashboard";

    return (
        <div>
            <AppBar
                sx={{
                    px: !showHeader ? 10 : 2,
                    bgcolor: "white",
                    color: 'black',
                    boxShadow: "none"
                }}
                position="fixed"
            >
                <Toolbar>
                    {showHeader && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={onMenuToggle}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>

                    }
                    <Link href="/" underline="none">
                        <Box
                            component="img"
                            src="/logo.png"
                            width="92px"
                            height="42px"
                            sx={{ marginLeft: "10px" }}
                        />
                    </Link>
                    <Search sx={{ borderRadius: "20px" }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton
                            size="large"
                            // edge="end"

                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <WidgetsIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <MailIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};

export default Header;
