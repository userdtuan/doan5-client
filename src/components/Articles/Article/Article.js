import React, { useState, useRef, useEffect } from "react";
import { Button } from '@material-ui/core';
import Quill from "quill";
import useStyles from './styles.js';
import iconLove from '../../../images/love.png';
import iconLoveActive from '../../../images/loveActive.png';
import iconAddress from '../../../images/place.png';
import iconPrev from '../../../images/prev.png';
import iconNext from '../../../images/next.png';
import memories from '../../../images/nhat.JPG';
import check from '../../../images/check.png';
import unCheck from '../../../images/uncheck.png';
import iconDientich from '../../../images/dientich.png';
import iconPhone from '../../../images/phone.png';
import iconReport from '../../../images/report.png';
import QRCode from 'qrcode.react';
import Axios from "axios";
import { useLocation, useHistory, useParams } from "react-router-dom";


const Article = ({article}) => {
  const history = useHistory();
  const classes = useStyles();
  const images = [article.image, article.image_wc, article.image_tu_cua];
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentImage]);

  useEffect(() => {
    Axios.get(`http://localhost:5000/user/infor/${article.user_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setUserProfile(response.data)
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
  }, [article]);

  const previousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const toggleDiv = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.Form}>
      <div className="container">
        <div className="row col-12">
            <div className="col-9">
              {/* <img src={article.image} className={classes.image}></img> */}
              <div className="sliderShow" style={{width: '100%', height: 'auto', justifyContent: 'center'}}>
                <img src={images[currentImage]} className={classes.image} alt="Slideshow"/>
                <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center', paddingTop: 10,}}>
                  <img src={iconPrev} className={classes.iconLove} onClick={previousImage}></img>
                  <img src={iconNext} className={classes.iconLove} onClick={nextImage}></img>
                </div>
              </div>
              <h3>{article.tieude}</h3>
              <div className="row" style={{paddingLeft: 15}}>
                <h4 style={{color: 'red'}}>{article.giatien} / 1 tháng</h4>
                <Button style={{marginLeft: 'auto'}}>
                  Lưu tin 
                  <img src={iconLove} className={classes.iconLove}></img>
                </Button>
              </div>
              <span>6 giờ trước</span>
              <div className="row" style={{marginLeft: 0, paddingTop: 10, borderBottom: "1px solid #5B5757"}}>
                <img src={iconAddress} className={classes.iconAddress}></img>
                <span className={classes.titleAddress}>{article.address}</span>
              </div>
              <div style={{paddingTop: 10, marginLeft: 0, marginRight: 0, borderBottom: "1px solid #5B5757"}}>
                <h5 style={{fontWeight: 'bold'}}>Tiện nghi</h5>
                <div className="row" style={{marginLeft: 0, justifyContent: 'space-between'}}>
                  <div>
                    <span>Gác lửng: </span>{article.gac_lung ? <img src={check} className={classes.iconCheck}></img> : <img src={unCheck} className={classes.iconCheck}></img>} 
                  </div>
                  <div>
                    <span>Nấu ăn: </span>{article.nau_an ? <img src={check} className={classes.iconCheck}></img> : <img src={unCheck} className={classes.iconCheck}></img>} 
                  </div>
                  <div>
                    <span>Máy giặt: </span>{article.may_giat ? <img src={check} className={classes.iconCheck}></img> : <img src={unCheck} className={classes.iconCheck}></img>} 
                  </div>
                </div>
                <div className="row" style={{marginLeft: 0, justifyContent: 'space-between'}}>
                  <div>
                    <span>Thang máy: </span>{article.thang_may ? <img src={check} className={classes.iconCheck}></img> : <img src={unCheck} className={classes.iconCheck}></img>} 
                  </div>
                  <div>
                    <span>Wifi miễn phí: </span>{article.wifi ? <img src={check} className={classes.iconCheck}></img> : <img src={unCheck} className={classes.iconCheck}></img>} 
                  </div>
                  <div>
                    <span>Số người ở tối đa: {article.so_nguoi}</span> 
                  </div>
                </div>
                <div className="row" style={{marginLeft: 0, marginTop: 10}}>
                  <img src={iconDientich} className={classes.iconAddress}></img>
                  <span className={classes.titleAddress}>Diện tích: {article.square} m2</span>
                </div>
              </div>
              <div style={{paddingTop: 10, marginLeft: 0, marginRight: 0, borderBottom: "1px solid #5B5757"}}>
                <h5 style={{fontWeight: 'bold'}}>Mô tả chi tiết</h5>
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
            </div>
            <div className="col-3">
              <div>
                <div className="row" style={{alignItems: 'center'}}>
                  <img src={memories} className={classes.avatar}></img>
                  <span className={classes.name} onClick={()=>history.push(`/user/${userProfile.user_id}`)}>{userProfile.full_name}</span>
                  <br/>
                  <p><span className={classes.name}> </span></p>
                  <p><span className={classes.name}>Số điện thoại: </span><span>{userProfile.phone}</span></p>
                </div>
                <div className="row" style={{paddingTop: 20, }}>
                  <Button style={{backgroundColor: '#FED082', width: '100%', alignItems: 'center'}} href="tel:0708026082" onClick={toggleDiv}><img src={iconPhone} className={classes.iconPhone}></img>Liên hệ người bán</Button>
                </div>
                {isOpen && (
                    <div style={{justifyContent: 'center', marginTop: 15, display: 'block'}}>
                      <QRCode value="tel:0708026082"/>
                    </div>
                  )}
                <div className="row" style={{paddingTop: 10,}}>
                  <Button style={{backgroundColor: 'none', width: '100%', border: "1px solid #FED082",  alignItems: 'center'}}><img src={iconReport} className={classes.iconPhone}></img>Báo cáo bài đăng</Button>
                </div>
              </div>
            </div>
        </div>
      
      </div>
    </div>
  );
}

export default Article;