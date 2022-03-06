import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faWeibo } from '@fortawesome/free-brands-svg-icons';
import Grid from '@mui/material/Grid';
function Footer() {
    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '50vh',
        }}
        // style={{backgroundColor: '	#ffcc00',}}
      >
      <Box
        style={{backgroundColor: '	#ffcc00',}}
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        {/* <Container maxWidth="sm"> */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" align='center'>
              Here is the footer, if I have time I will add new social media icon to here
            </Typography>
          </Grid>
          <Grid item xs={10}>
          </Grid>
          <Grid item xs={2}>
            <FontAwesomeIcon style={{
                height: '48px',
                width: '48px',
            }} 
            icon={faDiscord} 
            color="#7289DA"/>
            <FontAwesomeIcon style={{
              height: '48px',
              width: '48px',
            }}
          icon={faTwitter} 
          color="#1DA1F2"
          />
            <FontAwesomeIcon style={{
              height: '48px',
              width: '48px',
            }}
            icon={faWeibo}
            color="#DF2029"/>
          </Grid>
        </Grid>
      </Box>
      </Box>
    );
}
export default Footer;