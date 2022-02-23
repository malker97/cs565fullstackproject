import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function Weather() {
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
    return(
        <div>
            {/* {Weather} */}
            {/* {repo} */}
        </div>
    )

}
export default Weather;