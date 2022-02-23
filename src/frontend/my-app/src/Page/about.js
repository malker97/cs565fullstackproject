import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});
const cards = [
    {id: 1, name: 'Jesse Emerson ', imglink: "",description: 'Undergraduated Student Of PSU'},
    {id: 2, name: 'Yixuan Feng', imglink: "", description: 'Graduated Student Of PSU.'},
    {id: 3, name: 'Zhengmao Zhang', imglink: "https://0xchams.chameleoncollective.io/metadata/266.png",description: 'Graduated Student Of PSU.'}
  ];

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Todo Project
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Thank you for your interest in our project, This WebApp is a web-hosted service that allow multiple users to edit the same calendar event at the same time.
            </Typography>
          </div>
        </div>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
              Tech Stack
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Our information is below.
            </Typography>
          </div>
        </div>
        {cards.map(card => (
        <Stack container direction="row" spacing={30}         
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Card className={classes.card} alignItems="center">
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.imglink}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
            </Card>
        </Stack>
         ))}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Our information is below.
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={3} md={3} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {card.imglink}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);