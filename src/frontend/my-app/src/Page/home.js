import React from "react";
import { TextField } from "@material-ui/core";
import '../Style/home.css'

function Home() {
    return(
        <div className="container">
            <h1>HOME</h1>
            <form className="taskid" noValidate autoComplete="off">
                <TextField 
                id="standard-basic" 
                label="Please enter your user id/task id" 
                aria-describedby="my-helper-text"
                className="idinput"
                />
            </form>
        </div>
    )
}

export default Home;