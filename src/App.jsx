import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./compenent/TopBar";
import SideBar from "./compenent/SideBar";
import { useState, createContext, useEffect } from "react";
import { json, Outlet } from "react-router-dom";
import { Datachild } from "../page/datafetch";
import Team from "../page/team";
import ControlledAccordions from "../page/fake";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  // @ts-ignore
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${drawerWidth}px`,
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  
}));

// @ts-ignore
export const DarkModeContext = createContext();

export default function App() {
  <Datachild>
    <Team />
  </Datachild>;

  const theme = useTheme();
  // localstorage handleclose
  const [open, setOpen] = useState(() => {
    const saveopen = localStorage.getItem("setopen");
    return saveopen !== null ? JSON.parse(saveopen) : true;
  });
  // localestorage darkmode
  const [DarkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : true;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    localStorage.setItem("setopen", JSON.stringify(true));
  };

  const handleDrawerClose = () => {
    setOpen(false);
    localStorage.setItem("setopen", JSON.stringify(false));
  };

  return (
    <DarkModeContext.Provider value={{ DarkMode, toggleDarkMode }}>
      <Datachild>
        <Box
          sx={{
            minHeight: "100vh",
            width: "100vw",
            backgroundColor: DarkMode ? "#000" : "#fff", 
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <CssBaseline />
          <TopBar open={open} handleDrawerOpen={handleDrawerOpen} />
          <SideBar open={open} handleDrawerClose={handleDrawerClose} />

          <Main
            // @ts-ignore
            open={open}
          >
            <DrawerHeader />
            <Outlet />
          </Main>
        </Box>
      </Datachild>
    </DarkModeContext.Provider>
  );
}
