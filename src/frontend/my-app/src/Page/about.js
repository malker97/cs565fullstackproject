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
    {id: 1, name: 'Jesse Emerson ', imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NKmKAw-4Oi12wF9C3C7_ulrDH1D7kW_3zQ&usqp=CAU",description: 'Undergraduated Student Of PSU'},
    {id: 2, name: 'Yixuan Feng', imglink: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", description: 'Graduated Student Of PSU.'},
    {id: 3, name: 'Zhengmao Zhang', imglink: "https://0xchams.chameleoncollective.io/metadata/266.png",description: 'Graduated Student Of PSU.'}
  ];
const techstack = [
    {id: 1, name: 'React.js', imglink: "https://res.cloudinary.com/practicaldev/image/fetch/s--MLrhag65--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png",description: 'Front End Framework'},
    {id: 2, name: 'Express.js', imglink: "https://miro.medium.com/max/1400/0*bmq42b-t3O56QKNM.jpg",description: 'Back End Framework'},
    {id: 3, name: 'Material UI', imglink: "https://mui.com/static/logo.png",description: 'Open Sources FE package'},
    {id: 4, name: 'React-Bootstrap', imglink: "https://miro.medium.com/max/1400/1*5Jv5YAGqu3zL5endb8dtBA.png",description: 'Open Sources FE package'},
    {id: 5, name: 'Material UI', imglink: "https://sites.google.com/a/editorblogger.com/diplomado-implementacion-de-aulas-virtuales/_/rsrc/1472474322323/home/Google-Calendar-icon.png",description: 'Open Sources FE package'},
    
    // https://sites.google.com/a/editorblogger.com/diplomado-implementacion-de-aulas-virtuales/_/rsrc/1472474322323/home/Google-Calendar-icon.png
    
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
              About Tech Stack
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Our information is below.
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {techstack.map(card => (
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