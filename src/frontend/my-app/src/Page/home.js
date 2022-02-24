import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import '../Style/home.css';
import { makeStyles } from "@material-ui/core";
import { createStore, action, useStoreActions, useStoreState } from "easy-peasy";
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



function Home() {
  const classes = useStyles();
  const [userid, setuserid] = useState('');
  const [ifnew, setifnew] = useState(false);

  const login = useStoreActions((actions) => actions.login);
  const loggedIn = useStoreState((state) => state.loggedIn);
  const setnewuser = useStoreActions((actions) => actions.setnewuser);

  const get_info = () => {
    axios
      .get(
        `localhost:3010/api/users`
      )
      .then((res) => {
        console.log(res);
        setifnew()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {

    if (userid !== '' && ifnew === true) {
      setnewuser(true); 
    }
    console.log(loggedIn);
  }, [ifnew])


  return (
    <div className="container">
      <form className="taskid" noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Please enter your user id/task id"
          aria-describedby="my-helper-text"
          className="idinput"
          onChange={e => { setuserid(e.target.value); console.log(e.target.value); }}
        />
        <br />
        <Button className={classes.margin} variant="contained" color="primary" onClick={e => {get_info(); login(true);}}>Submit</Button>
      </form>
    </div>
  )
}

export default Home;