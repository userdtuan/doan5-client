import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import useStyles from './styleCard';



const ArticleCard = ({article, setTriger, setArticle}) => {
    const classes = useStyles();

    const handleClick = () => {
        setTriger(true)
        setArticle(article)
      };
  return (
    <div>
    <Card style={{ width: '100%' }} onClick = {handleClick}>
      <Grid container>
        <Grid item xs={4}>
        <CardMedia className={classes.media} image={article.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={article.tieude} />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <h3>{article.tieude}</h3>
            <p>Gia phong: {article.giatien}</p>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    <br />
    </div>
  );
}

export default ArticleCard;