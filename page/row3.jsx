import React from "react";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { BorderClear } from "@mui/icons-material";
import Pie from "./pie";
import Char from "./char";
import { useContext, createContext } from "react";
import { DarkModeContext } from "../src/App";
import { DownloadOutlined } from "@mui/icons-material";

function Row3() {
  const { DarkMode } = useContext(DarkModeContext);
  const theme = useTheme();
  return (
    <Stack direction="row" gap={1} mt={2} sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "50%",
          // border: "2px solid red",
          backgroundColor: DarkMode ? "#333" : "#fff",
          color: DarkMode ? "#fff" : "#333",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color={theme.palette.secondary.main}
            mb={1}
            mt={2}
            ml={4}
            variant="h6"
          >
            Pie
          </Typography>
        </Box>
        <Pie isDashboard={true} />
      </Paper>

      <Paper
        sx={{
          width: "50%",
          // border: "2px solid red",
          backgroundColor: DarkMode ? "#333" : "#fff",
          color: DarkMode ? "#fff" : "#333",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            color={theme.palette.secondary.main}
            mb={1}
            mt={2}
            ml={4}
            variant="h6"
          >
           char
          </Typography>
        </Box>
        <Char isDashboard={true} />
      </Paper>
    </Stack>
  );
}

export default Row3;
