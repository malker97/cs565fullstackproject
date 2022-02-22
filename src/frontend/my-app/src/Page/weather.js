import React from "react";
import axios from "axios";

function Weather() {

    const get_news = () => {
        axios
          .get(
            `https://wttr.in`
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return(
        <div>
            {/* <h1>WEATHER</h1> */}
        </div>
    )
}
export default Weather;