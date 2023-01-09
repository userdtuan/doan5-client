import React, { useState, useRef, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import useStyles from './styleCard';
import iconLove from '../../../images/love.png';
import iconLoveActive from '../../../images/loveActive.png';


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
        <Grid item xs={7}>
          <CardContent>
            <h3>{article.tieude}</h3>
            <p className={classes.Price}>{article.giatien} vnđ/1 tháng</p>

            <div className={classes.bottomForm}>
              <p >6 giờ trước | </p>
              <p className={classes.address}>{article.address}</p>
            </div>
          </CardContent>
        </Grid>
        <Grid item xs={1} style={{alignItems: 'center', justifyContent: 'center'}}>
          <Button style={{marginTop: 60}} >
            <img src={iconLove} className={classes.iconLove}></img>
          </Button>
        </Grid>
      </Grid>
    </Card>
    <br />
    </div>
  );
}

export default ArticleCard;