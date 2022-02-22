import React from "react";
import { TextField, Button } from "@material-ui/core";
import '../Style/home.css';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    margin: {
      marginTop: theme.spacing(8),
      marginLeft: "20%",
      width: "20%",
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function Home() {
    const classes = useStyles();

    return (
        <div className="container">
            <form className="taskid" noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Please enter your user id/task id"
                    aria-describedby="my-helper-text"
                    className="idinput"
                />
                <br/>
                <Button className={classes.margin} variant="contained" color="primary">Submit</Button>
            </form>
        </div>
    )
}

export default Home;