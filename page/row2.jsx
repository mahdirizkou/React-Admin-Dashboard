import React from "react";
import Line from "./line";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, createContext } from "react";
import { DarkModeContext } from "../src/App";
import { DownloadOutlined } from "@mui/icons-material";

const Row2 = () => {
  const theme = useTheme();
  const { DarkMode } = useContext(DarkModeContext);
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={2}>
      <Paper
        sx={{
          // border: "2px solid red",
          maxWidth: 900,
          flexGrow: 1,
          backgroundColor: DarkMode ? "#333" : "#fff",
          color: DarkMode ? "#fff" : "#333",
          minWidth:"400px"
        }}
      >
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>

          <Box>
            <IconButton sx={{ mr: 3 }}>
            <DownloadOutlined sx={{ color: DarkMode ? "#fff" : "#333" }} />
            </IconButton>
          </Box>
        </Stack>

        <Line isDashboard={true} />
      </Paper>
      {/* hna salina */}

      <Box sx={{ maxHeight: 368, flexGrow: 1,overflow:"auto" }}>
        <Paper
          sx={{
            backgroundColor: DarkMode ? "#333" : "#fff",
            color: DarkMode ? "#fff" : "#333",
          }}
        >
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        <Paper
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: DarkMode ? "#333" : "#fff",
            color: DarkMode ? "#fff" : "#333",
          }}
        >
           <Box p={1.2} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" fontWeight="600">
              test
            </Typography>
            <Typography variant="body2">test2</Typography>
            <Typography
              variant="body1"
              sx={{textAlign: "center", width: "50%" }}
            >
              test3
            </Typography>
          </Box>
          <Typography
            borderRadius={1.4}
            p={1}
            bgcolor={theme.palette.error.main}
            color={theme.palette.getContrastText(theme.palette.error.main)}
            variant="body2"
          >
            $ 555
          </Typography>
        </Paper>
      </Box>
    </Stack>
  );
};

export default Row2;
