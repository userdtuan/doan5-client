import React, { useState, useRef, useEffect } from "react";
import { useLocation,useHistory } from "react-router-dom";
import Axios from "axios";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import MyCard from "./MyCard";



const Page1 = () => {

  return (
    <div>
     <MyCard/>
    </div>
  );
};
export default Page1;
