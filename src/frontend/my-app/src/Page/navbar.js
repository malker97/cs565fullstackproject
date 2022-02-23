import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginTop: theme.spacing(1),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [repo, setWeather] = useState("");
  const get_weather = () => {
    axios.get('https://wttr.in/?format=3')
    .then(resp => {
      console.log(resp.data);
      const locwttr = resp.data;
      setWeather(locwttr);
      // return resp.data;
    });
  };
  useEffect(() => {
    get_weather();
  }, []);
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          To-do app
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/weather" className={classes.link}>
              {repo}
            </Link>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/createtask" className={classes.link}>
              Createtask
            </Link>
            <Link to="/tasklist" className={classes.link}>
              Task List
            </Link>
            <Link to="/news" className={classes.link}>
              News
            </Link>
            <Link to="/calendar" className={classes.link}>
              Calendar
            </Link>
            <Link to="/about" className={classes.link}>
              FAQ
            </Link>

          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;