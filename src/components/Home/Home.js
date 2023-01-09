import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Articles from "../Articles/Articles";

import slider from "../../images/slider.jpg";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
        {/* <img src={slider} width="100%" height="500" style={{objectFit: "cover", borderRadius: 20}}/> */}
        <div>
          <div className={classes.Card}>
            <Articles setCurrentId={setCurrentId}/>
          </div>
        </div>
    </Grow>
  );
};

export default Home;

