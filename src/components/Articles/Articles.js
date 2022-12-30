import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Axios from "axios";

// import Post from './Post/Post';
import useStyles from './styles';

const Articles = ({ setCurrentId }) => {
  //   const posts = useSelector((state) => state.posts);
    const classes = useStyles();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/articles/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setArticles(response.data)
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }, []);

  return (
    !articles.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {articles.map((article) => (
            <Grid key={article._id} item xs={16} sm={6} md={6}>
              {/* <Post post={post} setCurrentId={setCurrentId} /> */}
              {article._id}-{article.tieude}
            </Grid>
          ))}
        </Grid>
      )
  );
};

export default Articles;
