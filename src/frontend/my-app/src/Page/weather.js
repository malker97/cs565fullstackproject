import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
function Weather() {
    const [repo, setWeather] = useState("");
    const get_weather = () => {
      axios.get('https://wttr.in/?format=j1')
      .then(resp => {
        console.log(resp.data);
        const locwttr = resp.data;
        setWeather(locwttr);
        // // return resp.data;
      });
    };
    useEffect(() => {
      get_weather();
    }, []);
    return(
        <div>
          {/* {repo.current_condition.FeelsLikeC} */}
          {/* {repo.current_condition[0].FeelsLikeC} */}
        </div>
    )

}
export default Weather;