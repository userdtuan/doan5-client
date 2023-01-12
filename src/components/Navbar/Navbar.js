import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import memories from "../../images/memories.png";
import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";
import { test } from "../../actions/auth";
import iconSearch from "../../images/search.png";
import {
  TextField
} from "@material-ui/core";

const testHandler = async () => {
  const a = test("tuan");
  alert(a);
};

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [search, setSearch] = useState("")
  const [searchText, setSearchText] = useState("")

  const handleSearchChange = (event) => {
    setSearch(event.target.value);

  };
  const handleSearchClick = () => {
    if(search!="")
    history.push(`/search/${search}`);
    else
    history.push('/');
  };
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h3"
          align="center"
        >
        N&T Home
        </Typography>
      </div>
      <div className={classes.search}>
        <div className="input-group">
          <TextField
                placeholder="Tìm kiếm phòng trọ..."
                className="form-control py-2"
                type="text"
                fullWidth
                margin="normal"
                required
                value={search}
                onChange={handleSearchChange}
              />
          <div className="input-group-append">
              <Button className="btn btn-outline-secondary" onClick={handleSearchClick}>
                <img src={iconSearch} width="25" height="25" />
              </Button>
          </div>
        </div>
      </div>
      
      <Toolbar className={classes.toolbar}>
        
        {user?.result ? (
          <div className="row">
            <Button
              component={Link}
              to="/new-article"
              variant="contained"
              color="default"
              className={classes.btnNav}
            >
              Đăng tin
            </Button>
            {/* <Button
              component={Link}
              variant="contained"
              color="default"
              onClick={() => testHandler()}
              className={classes.btnNav}
            >
              Tin yêu thích
            </Button> */}
          <div className={classes.profile}>
            
            {/* <Button
              component={Link}
              to="/new-article"
              variant="contained"
              color="default"
            >
              New
            </Button> */}
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h8" onClick={()=> history.push('/profile')}>
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={classes.btnLogin}
              onClick={logout}
            >
              Logout
            </Button>
          </div>
          
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            className={classes.btnLogin}
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
