import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Articles from "../Articles/Articles";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
      <Articles setCurrentId={setCurrentId} />
      </Container>
    </Grow>
  );
};

export default Home;
