import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import Quill from "quill";


const Article = ({article}) => {
  return (
    <div>
        <h1>{article.tieude}</h1>
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
    </div>
  );
}

export default Article;