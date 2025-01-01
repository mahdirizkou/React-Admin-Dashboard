import { Stack, useTheme } from "@mui/material";
import React from "react";
import Paperr from "./paper";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

function Row1() {
  const theme = useTheme();

  const data1 = [
    {
      id: "javascript",
      label: "javascript",
      value: 40,
      color: "hsl(111, 90%, 90%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 60,
      color: "hsl(22, 90%, 90%)",
    },
  ];
  const data2 = [
    {
      id: "javascript",
      label: "javascript",
      value: 70,
      color: "hsl(111, 90%, 90%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 30,
      color: "hsl(22, 90%, 90%)",
    },
  ];
  const data3 = [
    {
      id: "javascript",
      label: "javascript",
      value: 201,
      color: "hsl(240, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 30,
      color: "hsl(22, 90%, 90%)",
    },
  ];
  const data4 = [
    { id: "sass", label: "sass", value: 521, color: "hsl(320, 70%, 50%)" },
    {
      id: "sass",
      label: "sass",
      value: 60,
      color: "hsl(22, 90%, 90%)",
    },
  ]; 

  // You can define other data arrays (data2, data3, data4) in the same format

  return (
    <Stack
      flexGrow={1}
      direction={"row"}
      gap={1}
      flexWrap={"wrap"}
      justifyContent={{ xs: "center", sm: "space-between"  }}
      mt={1}
    >
      <Paperr
        icon={<EmailIcon sx={{ color: theme.palette.secondary.main }} />}
        test={"12,33"}
        test2={"Email Sent"}
        porcentage={"+14%"}
        data={data1}
        scheme={'nivo'}
        sx={{ marginRight: 0.2 }}  
      />
      <Paperr
        icon={<PointOfSaleIcon sx={{ color: theme.palette.primary.main }} />}
        test={"4,200"}
        test2={"Sales"}
        porcentage={"+20%"}
        data={data2}
        scheme={'paired'}
        sx={{ marginRight: 0.5 }}
      />
      <Paperr
        icon={<PersonAddIcon sx={{ color: theme.palette.success.main }} />}
        test={"1,200"}
        test2={"New Clients"}
        porcentage={"+8%"}
        data={data3}
        scheme={'set1'}
        sx={{ marginRight: 0.5 }}
      />
      <Paperr
        icon={<TrafficIcon sx={{ color: theme.palette.info.main }} />}
        test={"10,500"}
        test2={"Traffic"}
        porcentage={"+12%"}
        data={data4}
        scheme={'set2'}
        sx={{ marginRight: 0 }}  
      />
    </Stack>
  );
  
}

export default Row1;
