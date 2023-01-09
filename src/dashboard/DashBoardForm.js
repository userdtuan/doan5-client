import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button, Grid} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";

const DashBoard = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} className="row">
            <Grid className="col-xl-2 col-xs-12">
                <div className={classes.ContentLeft}>
                    <Typography component={Link} to="/admin" className={classes.liTitle}><h3 style={{marginLeft: 45}}>Manager</h3></Typography>
                    <ul className={classes.List}>
                        <li className={classes.li}><Typography component={Link} to="/admin/manager-user" className={classes.liTitle}>Quản lí người dùng</Typography></li>
                        <li className={classes.li}><Typography component={Link} to="/admin/manager-post" className={classes.liTitle}>Quản lí bài viết</Typography></li>
                        <li className={classes.li}><Typography component={Link} to="/admin/manager-report" className={classes.liTitle}>Báo cáo từ người dùng</Typography></li>
                    </ul>
                </div>
            </Grid>
            <Grid className="col-xl-10 col-xs-12">
                <div className={classes.ContentRight}>
                    <h4>DashBoard</h4>
                    <h3>Số người thăm trang</h3>
                    <h3>Số người sử dụng ứng dụng</h3>
                    <h3>Số bài viết</h3>
                </div>
            </Grid>
        </Grid>
    );
};

export default DashBoard;
