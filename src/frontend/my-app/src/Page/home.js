import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import '../Style/home.css';
import { makeStyles } from "@material-ui/core";
import { createStore, action } from "easy-peasy";
import axios from "axios";

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

const store = createStore({
  loggedIn: false,
  login: action((state, newstatus) => {
    state.loggedIn = newstatus;
  }),
});

function Home() {
    const classes = useStyles();
    const [userid, setuserid] = useState('');
   
    const get_info = () => {
      axios
        .get(
          ``
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(()=>{
      if(userid!==''){
        
      }
    },[userid])


    return (
        <div className="container">
            <form className="taskid" noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Please enter your user id/task id"
                    aria-describedby="my-helper-text"
                    className="idinput"
                    onChange={e => {setuserid(e.target.value); console.log(e.target.value);}}
                />
                <br/>
                <Button className={classes.margin} variant="contained" color="primary" onClick={get_info()}>Submit</Button>
            </form>
        </div>
    )
}

export default Home;