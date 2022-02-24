import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import News_card from "./news_card";
import axios from "axios";
import { useStoreState } from "easy-peasy";

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

  const loggedIn = useStoreState((state) => state.loggedIn);
  console.log(loggedIn);

  const classes = useStyles();
  const [info, setinfo] = useState([]);
  const API_KEY = "cc1aef5aebcd496e984b8d55cbe8a4de";
  const formateddata = [];

  const get_news = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Apple&from=2022-02-21&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data.articles)
        setinfo(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getformat = () => {
    if (info) {
      info.map((element) => {
        formateddata.push({
          "src": element.url,
          "image": element.urlToImage,
          "title": element.title,
          "author": element.author,
          "description": element.description
        });
      });
      return formateddata.map((row) => {
        return (
          <News_card data={row} />
        )
      })
    }
  }

  useEffect(() => {
    get_news();
  }, []);

  return (
    <div className={classes.root}>
      {getformat()}
    </div>
  );
}

export default News;
