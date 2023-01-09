import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button, Grid} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import iconSearch from "../images/search.png";

const ManagerUser = () => {
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
                    <div className="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 20}}>
                        <h4>Content Quản lí người dùng</h4>
                        <div className={classes.search} style={{width: '30%'}}>
                            <div className="input-group">
                            <input className="form-control py-2" type="text" placeholder="Tìm kiếm người dùng..."/>
                            <div className="input-group-append">
                                <Button className="btn btn-outline-secondary">
                                    <img src={iconSearch} width="25" height="25" />
                                </Button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered table-striped" style={{marginTop: 30, }} >
                    <tr>
                        <th>Company</th> 
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>
                </div>
            </Grid>
        </Grid>
    );
};

export default ManagerUser;
