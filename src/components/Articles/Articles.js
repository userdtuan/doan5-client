import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import Axios from "axios";
import ArticleCard from "./Article/ArticleCard";
import Article from "./Article/Article";
import { useLocation, useHistory } from "react-router-dom";
import slider from "../../images/slider.jpg";

// import Post from './Post/Post';
import useStyles from "./styles";

const Articles = ({ setCurrentId, searchKey }) => {
  //   const posts = useSelector((state) => state.posts);
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});
  const [triger, setTriger] = useState(false);


  useEffect(() => {
    setTriger(false);
  }, [location]);
  useEffect(() => {
    Axios.get("http://localhost:5000/articles/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }, []);

  return !articles.length ? (
    <CircularProgress />
  ) : // <Grid className={classes.container} container alignItems="stretch" spacing={3}>
  !triger ? (
    <div>
      {searchKey == null ? (
        <img
          src={slider}
          width="100%"
          height="500"
          style={{ objectFit: "cover", borderRadius: 20 }}
        />
      ) : null}

      <div style={{ borderRadius: 15, backgroundColor: "#FFF", marginTop: 30 }}>
        <Container>
          <h3 style={{ paddingTop: 30, paddingBottom: 20 }}>
            {" "}
            {searchKey == null
              ? "Tin Dành cho bạn"
              : `Search for ${searchKey}`}{" "}
          </h3>
          {articles.map((article) => (
            <div>
              {searchKey == null ? (
                <ArticleCard
                  key={article._id}
                  article={article}
                  setTriger={setTriger}
                  setArticle={setArticle}
                />
              ) : (
                <div>
                  {article.tieude
                    .toLowerCase()
                    .includes(searchKey.toLowerCase()) ||
                  article.address
                    .toLowerCase()
                    .includes(searchKey.toLowerCase()) ? (
                    <ArticleCard
                      key={article._id}
                      article={article}
                      setTriger={setTriger}
                      setArticle={setArticle}
                    />
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </Container>
      </div>
    </div>
  ) : (
    <div>
      <Article key={article._id} article={article} />
    </div>
  );
};

export default Articles;
