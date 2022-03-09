import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import "../Style/home.css";
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
  const [userid, setuserid] = useState("");
  const [ifnew, setifnew] = useState(false);

  const login = useStoreActions((actions) => actions.login);
  const loggedIn = useStoreState((state) => state.loggedIn);
  const setnewuser = useStoreActions((actions) => actions.setnewuser);
  const setid = useStoreActions((actions) => actions.setid);

  const get_task = () => {
    console.log("in get_task: ", userid);
    axios
      .get(`/api/tasks/user/test1`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //get_task();
    if (userid !== "" && ifnew === true) {
      setnewuser(true);
    }
    console.log(loggedIn);
  }, [ifnew]);

  return (
    <div className="container">
      <form className="taskid" noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Please enter your user id/task id"
          aria-describedby="my-helper-text"
          className="idinput"
          onChange={(e) => {
            setuserid(e.target.value);
            //console.log("after setuserid: ", userid);
            console.log(e.target.value);
          }}
        />
        <br />
        <Button
          className={classes.margin}
          variant="contained"
          color="primary"
          onClick={(e) => {
            login(true);
            setid(userid);
            //console.log(userid);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Home;
