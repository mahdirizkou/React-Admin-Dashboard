import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({title,desc}) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{
          color: theme.palette.info.light, 
          fontWeight: "bold", 
        }}
        variant="h5" 
      >
        {title}
      </Typography>
      <Typography variant="body1">{desc}</Typography>
    </Box>
  );
};

export default Header;

