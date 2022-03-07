import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DateTimePicker } from "@material-ui/pickers";
import { useEffect, useState } from "react";
import axios from 'axios';
import { createStore, action, useStoreActions, useStoreState } from "easy-peasy";
// import { Alert } from 'react-alert';

const theme = createTheme();
const defaultValues = {
  eventttl: "",
  startDate: "",
  endDate: "",
  location: "",
  description: 0,
};

export default function SignUp() {

  const userid = useStoreState((state) => state.userid);
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    // `/api/tasks/user/${userid}`
    axios.post('http://localhost:3010/api/tasks/create',formValues);
  };
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add Event
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/* <form onSubmit={handleSubmit}> */}
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField
                  fullWidth
                  name="eventttl"
                  label="Event Title"
                  type="eventttl"
                  id="eventttl"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Grid>
            <Grid item xs={6}>
                Start Date:
                <TextField
                  required
                  fullWidth
                  name="startDate"
                //   label="startDate"
                  type="date"
                  id="startdate"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
              End Date:
                <TextField
                  required
                  fullWidth
                //   label="endDate"
                  name="endDate"
                  type="date"
                  id="enddate"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
              {/* Location: */}
                <TextField
                  fullWidth
                  name="location"
                  label="Location"
                  type="location"
                  id="location"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} style={{height: 200}}>
                {/* Description: */}
                <TextField
                  fullWidth
                  name="description"
                  label="Description"
                  type="text"
                  id="description"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            {/* </form> */}
            </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
