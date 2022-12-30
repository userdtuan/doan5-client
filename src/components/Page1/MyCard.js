import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardMedia, Grid } from '@material-ui/core';

const MyCard = () => {
  return (
    <Card style={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            alt="Card image"
            image="/path/to/image.jpg"
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <h3>Card Title</h3>
            <p>Card content</p>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default MyCard;