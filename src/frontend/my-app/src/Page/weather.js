import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function Weather() {
    const [info, setWeather] = useState("");
    const currtweather = "";
    const get_weather = () => {
      axios.get('https://wttr.in/?format=3')
      .then(resp => {
        console.log(resp.data);
        const locwttr = resp.data;
        setWeather(locwttr);
      });
    };
    useEffect(() => {
      get_weather();
    }, []);
    return(
        <div>
            {/* {Weather} */}
        </div>
    )

}
export default Weather;