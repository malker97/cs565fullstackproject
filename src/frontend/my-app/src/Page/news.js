import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import News_card from "./news_card";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  }));

function News() {
  const classes = useStyles();
  const [info, setinfo] = useState([]);
  const API_KEY = "";

  const get_news = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-02-21&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data.articles);
        setinfo(res.data.articles);
        console.log(info);
      })
      .catch((err) => {
        console.log(err);
      });
  };
     
    const formating = () =>{
        const formateddata = [];
		info.map((element) => {
			formateddata.push({
                "image": element.urlToImage,
                "title": element.title,
                "author": element.author,
                "description": element.description
            });
		});
		return formateddata;
    }

  useEffect(() => {
      get_news();
  }, []);

  return (
    <div className={classes.root}>
        <News_card /> 
    </div>
  );
}

export default News;
