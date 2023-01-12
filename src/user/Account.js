import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Grid } from "@material-ui/core";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import useStyles from "./styles";
import iconSearch from "../images/search.png";
import iconLove from "../images/love.png";
import iconLoveActive from "../images/loveActive.png";
import iconAddress from "../images/place.png";
import memories from "../images/nhat.JPG";
import iconPhone from "../images/phone.png";
import iconDate from "../images/date.png";
import iconPost from "../images/create.png";
import iconSocial from "../images/social.png";
import iconFace from "../images/facebook.png";
import iconIns from "../images/insta.png";
import iconTw from "../images/tweeter.png";
import image from "../images/slider.jpg";
import iconHide from "../images/hide.png";
import iconShow from "../images/show.png";
import iconEdit from "../images/edit.png";
import iconDel from "../images/delete.png";
import Axios from "axios";
import ButtonDetail from "../components/NewArticle/ButtonDetail";

import Article from "../components/Articles/Article/Article";

const Account = () => {
  const { user } = useParams();
  const [profile, setProfile] = useState({});
  const [articles, setArticles] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile);
  }, []);

  const handleStatusChange = async (id,status)=>{
    console.log(id)
    Axios.get(
        `http://localhost:5000/articles/update-status/${id}/${status}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
            alert(response.data.message);
            window.location.reload();
        })
        .catch((error) => {
          // An error occurred
          console.error(error);
        });
  }
  const handleDelete = async (id)=>{
    console.log(id)
    Axios.get(
        `http://localhost:5000/articles/remove/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
            alert(response.data.message);
            window.location.reload();
        })
        .catch((error) => {
          // An error occurred
          console.error(error);
        });
  }
  useEffect(() => {
    if (profile.details?.user_id) {
      Axios.get(
        `http://localhost:5000/articles/get-by-id/${user}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          setArticles(response.data);
        })
        .catch((error) => {
          // An error occurred
          console.error(error);
        });
    }
  }, [profile]);
  const classes = useStyles();
  return (
    <div className="container">
      <div className={classes.Form}>
        <div className="row col-12">
          <div className="col-9">
            <div style={{ borderBottom: "1px solid #5B5757" }}>
              <div className="row" style={{ alignItems: "center" }}>
                <img src={memories} className={classes.avatar}></img>
                <span className={classes.name}>{profile.details?.full_name} </span>
                <div
                  className="row"
                  style={{ marginRight: 0, marginLeft: "auto" }}
                >
                  <Button
                    style={{
                      backgroundColor: "none",
                      border: "1px solid #FED082",
                      alignItems: "center",
                    }}
                  >
                    + Theo dõi
                  </Button>
                </div>
              </div>
              <div
                className="row"
                style={{
                  alignItems: "center",
                  justifyContent: "end",
                  paddingBottom: 20,
                }}
              >
                <span>Số người theo dõi: 5 </span>
                <span style={{ paddingLeft: 50 }}>Đang theo dõi: 1 </span>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #5B5757", paddingTop: 15 }}>
              <h3>Các tin đã đăng</h3>
              <div>
                {articles.map((article, index) => (
                    // article.pulic ?
                  <div>
                    {article.public === true ? <div>
                        <Card style={{ width: "100%" }}>
                  <Grid container>
                    <Grid item xs={4}>
                    <CardMedia className={classes.media} image={article.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={article.tieude} />
                    </Grid>
                    <Grid item xs={7}>
                      <CardContent>
                        <h4>{article.tieude} </h4>
                        <p className={classes.Price}>{article.giatien} vnđ/1 tháng</p>
                        <div className={classes.bottomForm}>
                          <p>6 giờ trước | </p>
                          <p className={classes.address}>{article.address}</p>
                        </div>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
                <br />
                    </div> : null}
                  </div> 
                //   : ""
                ))}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div style={{ marginLeft: 20 }}>
              <div
                className="row"
                style={{ alignItems: "center", paddingTop: 10 }}
              >
                <img src={iconDate} className={classes.iconSub}></img>
                <span>Ngày tham gia: 12/01/2023</span>
              </div>
              <div
                className="row"
                style={{ alignItems: "center", paddingTop: 10 }}
              >
                <img src={iconPost} className={classes.iconSub}></img>
                <span>Số bài viết đã đăng: {articles.length}</span>
              </div>
              <div
                className="row"
                style={{ alignItems: "center", paddingTop: 10 }}
              >
                <span>
                  <img src={iconAddress} className={classes.iconSub}></img>
                  {profile.details?.address}
                </span>
              </div>
              <div
                className="row"
                style={{ alignItems: "center", paddingTop: 10 }}
              >
                <img src={iconPhone} className={classes.iconSub}></img>
                <span>032103123123</span>
              </div>
              <div
                className="row"
                style={{ alignItems: "center", paddingTop: 10 }}
              >
                <img src={iconSocial} className={classes.iconSub}></img>
                <span style={{ alignItems: "center" }}>
                  Mạng xã hội:{" "}
                  <img src={iconFace} className={classes.iconSub}></img>{" "}
                  <img src={iconIns} className={classes.iconSub}></img>
                  <img src={iconTw} className={classes.iconSub}></img>
                </span>
              </div>
              <div
                className="row"
                style={{ justifyContent: "center", paddingTop: 20 }}
              >
                {/* <Button
                  style={{
                    backgroundColor: "#FED082",
                    border: "1px solid #FED082",
                    alignItems: "center",
                  }}
                >
                  Chỉnh sửa thông tin
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
