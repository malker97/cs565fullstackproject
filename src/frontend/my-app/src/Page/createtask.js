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
import { createStore, action, useStoreActions, useStoreState } from "easy-peasy";
const theme = createTheme();

export default function SignUp() {

  const userid = useStoreState((state) => state.userid);

  const handleSubmit = (event) => {
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
            <Grid container spacing={3}>
              <Grid item xs={12}>
              <TextField
                  fullWidth
                  name="eventttl"
                  label="Event Title"
                  type="eventttl"
                  id="eventttl"
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
