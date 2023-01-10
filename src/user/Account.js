import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, CardMedia, Grid } from '@material-ui/core';
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import iconSearch from "../images/search.png";
import iconLove from '../images/love.png';
import iconLoveActive from '../images/loveActive.png';
import iconAddress from '../images/place.png';
import memories from '../images/nhat.JPG';
import iconPhone from '../images/phone.png';
import iconReport from '../images/report.png';
import iconDate from '../images/date.png';
import iconPost from '../images/create.png';
import iconSocial from '../images/social.png';
import iconFace from '../images/facebook.png';
import iconIns from '../images/insta.png';
import iconTw from '../images/tweeter.png';
import image from '../images/slider.jpg';
import Article from "../components/Articles/Article/Article";

const Account = () => {
    const classes = useStyles();
    return (
        <div className="container">
            <div className={classes.Form}>
                <div className="row col-12">
                    <div className="col-9">
                        <div style={{borderBottom: "1px solid #5B5757"}}>
                            <div className="row" style={{alignItems: 'center', }}>
                                <img src={memories} className={classes.avatar}></img>
                                <span className={classes.name}>Nhật phạm </span>
                                <div className="row" style={{marginRight: 0, marginLeft: 'auto'}}>
                                    <Button style={{backgroundColor: 'none', border: "1px solid #FED082",  alignItems: 'center'}}>+ Theo dõi</Button>
                                </div>
                            </div>
                            <div className="row" style={{alignItems: 'center',justifyContent: 'end', paddingBottom: 20}}>
                                <span >Số người theo dõi: 5 </span>
                                <span style={{paddingLeft: 50}}>Đang theo dõi: 1 </span>
                            </div>
                        </div>
                        <div style={{borderBottom: "1px solid #5B5757", paddingTop: 15}}>
                            <h3>Các tin đã đăng</h3>
                            <div>
                                <Card style={{ width: '100%' }} >
                                <Grid container>
                                    <Grid item xs={4}>
                                    <CardMedia className={classes.media} image={image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="Phòng trọng abc" />
                                    </Grid>
                                    <Grid item xs={7}>
                                    <CardContent>
                                        <h4>Phòng trọ Trần Đại Nghĩa</h4>
                                        <p className={classes.Price}>180 vnđ/1 tháng</p>
                                        <div className={classes.bottomForm}>
                                        <p >6 giờ trước | </p>
                                        <p className={classes.address}>Địa chỉ</p>
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
                                <Card style={{ width: '100%' }} >
                                <Grid container>
                                    <Grid item xs={4}>
                                    <CardMedia className={classes.media} image={image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title="Phòng trọng abc" />
                                    </Grid>
                                    <Grid item xs={7}>
                                    <CardContent>
                                        <h4>Phòng trọ Trần Đại Nghĩa</h4>
                                        <p className={classes.Price}>180 vnđ/1 tháng</p>
                                        <div className={classes.bottomForm}>
                                        <p >6 giờ trước | </p>
                                        <p className={classes.address}>Địa chỉ</p>
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
                        </div>
                    </div>
                    <div className="col-3">
                        <div style={{marginLeft: 20}}>
                            <div className="row" style={{alignItems: 'center', }}>
                                <img src={iconDate} className={classes.iconSub}></img><span>Ngày tham gia: 11/12/2021</span>
                            </div>
                            <div className="row" style={{alignItems: 'center', }}>
                                <img src={iconPost} className={classes.iconSub}></img><span>Số bài viết đã đăng: 12</span>
                            </div>
                            <div className="row" style={{alignItems: 'center', }}>
                                <span><img src={iconAddress} className={classes.iconSub}></img>Địa chỉ: Hòa Hải, Ngũ Hành Sơn, Đà Nẵng</span>
                            </div>
                            <div className="row" style={{alignItems: 'center', }}>
                                <img src={iconPhone} className={classes.iconSub}></img><span>032103123123</span>
                            </div>
                            <div className="row" style={{alignItems: 'center', }}>
                                <img src={iconSocial} className={classes.iconSub}></img><span style={{alignItems: 'center', }}>Mạng xã hội: <img src={iconFace} className={classes.iconSub}></img> <img src={iconIns} className={classes.iconSub}></img><img src={iconTw} className={classes.iconSub}></img></span>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Account;
