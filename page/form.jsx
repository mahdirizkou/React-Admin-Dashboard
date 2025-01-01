import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { DarkModeContext } from "../src/App";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const currencies = [
  {
    value: "admin",
    label: "admin",
  },
  {
    value: "manager",
    label: "manager",
  },
  {
    value: "user",
    label: "user",
  },
];
function Form() {
    const { DarkMode } = useContext(DarkModeContext);
    const theme = createTheme({
        palette: {
          mode: DarkMode ? 'dark' : 'light',
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundColor: DarkMode ? "#333" : "#fff",
                color: DarkMode ? "#fff" : "#333",
              },
            },
          },
        },
      });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("wa l7wwwwwwwwwwwwwwwwwwwwwwwaaaaaaaaaaaaaaaaaaaaaaaaa");
  handleClick()
}
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event , reason ) => {
    if (reason === 'clickaway') 
        return;
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} gap={2}>
        <TextField
          error={Boolean(errors.firstname)}
          helperText={
            errors.firstname
              ? errors.firstname.type === "required"
                ? "This field is required"
                : errors.firstname.type === "pattern"
                ? "Invalid pattern, only letters allowed"
                : null
              : null
          }
          //      if (errors.firstname) {
          //   if (errors.firstname.type === "required") {
          //     return "This field is required";
          //   } else if (errors.firstname.type === "pattern") {
          //     return "Invalid pattern, only letters allowed";
          //   }
          // }
          // return null;
          sx={{ flex: 1 }}
          {...register("firstname", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          label="first name"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.lastname)}
          helperText={
            errors.lastname
              ? errors.lastname.type === "required"
                ? "This field is required"
                : errors.lastname.type === "pattern"
                ? "Invalid pattern, only letters allowed"
                : null
              : null
          }
          sx={{ flex: 1 }}
          {...register("lastname", { required: true, pattern: /^[A-Za-z]+$/i })}
          label="last name"
          variant="filled"
        />
      </Stack>
      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email
            ? errors.email.type === "required"
              ? "This field is required"
              : errors.email.type === "pattern"
              ? "email invalid"
              : null
            : null
        }
        sx={{ flex: 1 }}
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        label="email"
        variant="filled"
      />
      <TextField
        error={Boolean(errors.city)}
        helperText={
          errors.lastname
            ? errors.city.type === "required"
              ? "This field is required"
              : errors.city.type === "pattern"
              ? "city invalid"
              : null
            : null
        }
        sx={{ flex: 1 }}
        {...register("city", { required: true, pattern: /^[A-Za-z]+$/i })}
        label="city"
        variant="filled"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="user type"
        defaultValue="admin"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box>
        <Button type="submit" variant="contained">
          Create new An employee
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </Box>
    </ThemeProvider>
  );
}

export default Form;
