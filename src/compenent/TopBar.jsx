import React, { useState, useEffect, useContext, createContext } from "react";
import {
  alpha,
  Box,
  IconButton,
  InputBase,
  Stack,
  styled,
  Toolbar,
  AppBar as MuiAppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search"; 
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SideBar from "./SideBar";
import { DarkModeContext } from '../App'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
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


// @ts-ignore
const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - 240px)`,
    marginLeft: `240px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, handleDrawerOpen }) => {
 
const { DarkMode, toggleDarkMode } = useContext(DarkModeContext);
  useEffect(() => {
    document.body.style.backgroundColor = DarkMode ? "#333" : "#fff";
    document.body.style.color = DarkMode ? "#fff" : "#000";
    // localStorage.setItem('darkMode', JSON.stringify(DarkMode));
  }, [DarkMode]);

  

  return (
    <AppBar position="fixed" sx={{ bgcolor: DarkMode ? "#333" : "#19d294" }}
    // props background
// @ts-ignore
    open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[{ mr: 2 }, open && { display: "none" }]}
        >
          <MenuIcon />
        </IconButton>

        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
      

        <Box flexGrow={1}></Box>

        <Stack direction={"row"}>
          <IconButton
            aria-label="light mode"
            color="inherit"
            onClick={toggleDarkMode}
          >
            {DarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton aria-label="notifications" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton aria-label="settings" color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton aria-label="person" color="inherit">
            <PersonIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
    
  );
};

export default TopBar;
