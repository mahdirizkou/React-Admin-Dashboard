import React from "react";
import { Box, Button } from "@mui/material";
import { DownloadDoneOutlined } from "@mui/icons-material";
import Row1 from "./row1";
import Row2 from "./row2";
import Row3 from "./row3";
import Header from "./اheader"

function Dashboard() {
  return (
    <div>
      <Header title={"DASHBOARD"} desc={"Welcome to your dashboard"} />
      <Box sx={{ textAlign: "right" }}>
      <Button 
  sx={{ padding: "6px 12px", textTransform: "capitalize", gap: "6px" }}
  variant="contained"
  color="primary"
>
  <DownloadDoneOutlined />
  Download Report
</Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default Dashboard;
