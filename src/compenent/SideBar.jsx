import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import React, { useContext } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DarkModeContext } from "../App";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const SideBar = ({ open, handleDrawerClose }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const Array1 = [
    {
      text: "Home",
      path: "/dashboard",
      icon: <HomeOutlinedIcon />,
    },
    {
      text: "manage team",
      path: "/team",
      icon: <Groups2OutlinedIcon />,
    },
  ];
  const Array2 = [
    {
      text: "Form",
      path: "/form",
      icon: <PermIdentityOutlinedIcon />,
    },
    {
      text: "Calendar",
      path: "/calandar",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      text: "Help",
      path: "/fake",
      icon: <HelpCenterOutlinedIcon />,
    }
  ];
  const Array3 =[{
    text :"char",
    path :"/char",
    icon : <BarChartOutlinedIcon />
  },
  {
    text :"Pie",
    icon :<DonutLargeOutlinedIcon />,
    path :"pie"
  },
  {
    text :"Line",
    icon :<TimelineOutlinedIcon />,
    path :"line"
  },
  // remove this icon 
]
  const { DarkMode } = useContext(DarkModeContext);
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: DarkMode ? "#333" : "#fff",
          color: DarkMode ? "#fff" : "#333",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton
          sx={{ color: DarkMode ? "#fff" : "#333" }}
          onClick={handleDrawerClose}
        >
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {Array1.map((x) => (
          <ListItem key={x.text} disablePadding>
            <ListItemButton sx={{bgcolor: (location.pathname === x.path) ? ( DarkMode ? '#808080' : "#bdbdbd"): null }} onClick={() => navigate(x.path)}>

              <ListItemIcon sx={{ color: DarkMode ? "#fff" : "#333"}}>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ color: "#fff" }} />
       <List>
        {Array2.map((x) => (
          <ListItem key={x.text} disablePadding>
            <ListItemButton sx={{bgcolor: (location.pathname === x.path) ? ( DarkMode ? '#808080' : "#bdbdbd"): null }} onClick={() => navigate(x.path)}>

              <ListItemIcon sx={{ color: DarkMode ? "#fff" : "#333"}}>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ color: "#fff" }} />
      <List>
        {Array3.map((x) => (
          <ListItem key={x.text} disablePadding>
            <ListItemButton sx={{bgcolor: (location.pathname === x.path) ? ( DarkMode ? '#808080' : "#bdbdbd"): null }} onClick={() => navigate(x.path)}>

              <ListItemIcon sx={{ color: DarkMode ? "#fff" : "#333"}}>
                {x.icon}
              </ListItemIcon>
              <ListItemText primary={x.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Drawer>
  );
};

export default SideBar;
