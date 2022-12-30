import React, { useState, useEffect } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Axios from "axios";
import ArticleCard from "./Article/ArticleCard";
import Article from "./Article/Article";
import { useLocation,useHistory } from "react-router-dom";



// import Post from './Post/Post';
import useStyles from './styles';

const Articles = ({ setCurrentId }) => {
  //   const posts = useSelector((state) => state.posts);
  const location = useLocation();
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});
  const [triger, setTriger] = useState(false);
  useEffect(()=>{
    setTriger(false)
  },[location])
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
        // <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        !triger ? (
            <div>
            {articles.map((article) => (
              <ArticleCard key={article._id} article={article} setTriger={setTriger} setArticle = {setArticle}/>
          ))}
        </div>
        ) : (
            <Article key={article._id} article={article}/>
        )
        
      )
  );
};

export default Articles;
