import { DataGrid } from '@mui/x-data-grid';
import { DarkModeContext } from "../src/App";
import React, { useContext } from "react";
import Button from '@mui/material/Button';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DataContext } from './datafetch';

const columns = [
  { field: 'col1', headerName: 'ID', width: 140, flex: 1, align: "center", headerAlign: "center" },
  { field: 'col2', headerName: 'Username', width: 140, flex: 1, align: "center", headerAlign: "center" },
  { field: 'col3', headerName: 'Email', width: 140, flex: 1, align: "center", headerAlign: "center" },
  { field: 'col4', headerName: 'City', width: 140, flex: 1, align: "center", headerAlign: "center" },
  {
    field: 'col5',
    headerName: 'User Type',
    width: 150,
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Button
        variant="contained"
        color={params.value === 'ADMIN' ? 'primary' : 'secondary'}
        startIcon={params.value === 'ADMIN' ? <AdminPanelSettingsOutlinedIcon /> : <LockOpenOutlinedIcon />}
      >
        {params.value}
      </Button>
    )
  }
];

function Team() {
  const constdata = useContext(DataContext);
  const { DarkMode } = useContext(DarkModeContext);

  const theme = createTheme({
    palette: {
      mode: DarkMode ? 'dark' : 'light',
    },
    components: {
      // @ts-ignore
      MuiDataGrid: {
        styleOverrides: {
          columnHeaders: {
            backgroundColor: DarkMode ? "#444" : "#f5f5f5", 
            color: DarkMode ? "#fff" : "#333", 
          },
        },
      },
    },
  });


  if (!constdata || constdata.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
        <DataGrid
          rows={constdata}
          // @ts-ignore
          columns={columns}
        />
    </ThemeProvider>
  );
}

export default Team;
