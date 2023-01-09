import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import Quill from "quill";
import useStyles from './styles.js';


const Article = ({article}) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <div className={classes.Form}>
        <Grid item xs={8}>
        <img></img>
        <CardMedia className={classes.image} image={article.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={article.tieude} />
        <h3>{article.tieude}</h3>
          <div>
            {article.content.ops.map((op) => {
              if (op.insert) {
                if (typeof op.insert === "string") {
                  return <p>{op.insert}</p>;
                } else if (op.insert.image) {
                  return <img src={op.insert.image} alt="" />;
                }
              }
              return null;
            })}
          </div>
        </Grid>
        <Grid item xs={4}>
          <img src={article.image} className={classes.iconLove}></img>
        </Grid>
        </div>
      </Grid>
      

    </div>
  );
}

export default Article;