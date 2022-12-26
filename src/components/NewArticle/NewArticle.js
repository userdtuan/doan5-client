import React, { useRef, useEffect, useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import DetailsForm from "./DetailsForm";
import { provinces, districts, wards } from "./addressList";
import { useDispatch } from "react-redux";

import { updateUserDetail } from "../../actions/auth";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";

function NewArticle() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState({});
  const [addressDetails, setAddressDetails] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile);
  }, [location]);
  // useRef hook to store a reference to the Quill editor element
  const editorRef = useRef(null);
  // useRef hook to store a reference to the Quill editor instance
  const quillRef = useRef(null);

  // useState hook to store the contents of the Quill editor
  const [content, setContent] = useState(null);
  // useEffect hook to initialize the Quill editor
  useEffect(() => {
    const editor = new Quill(editorRef.current, {
      theme: "snow",
    });
    quillRef.current = editor;
  }, [profile]);

  const handleSubmityswyg = (event) => {
    event.preventDefault();
    const content = quillRef.current.getContents();
    console.log(content);
    setContent(content);
    console.log(profile.token);
    Axios.defaults.headers.common['Authorization'] = `Bearer ${profile.token}`;
    Axios.post("http://localhost:5000/posts/", 
      {
        title:"ádsd"
      },
    )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

//     Axios.get('http://localhost:5000/posts/', {
//   headers: {
//     'Content-Type': 'application/json',
//   }
// })
//   .then(response => {
//     // The data is available in the response.data property
//     console.log(response.data);
//   })
//   .catch(error => {
//     // An error occurred
//     console.error(error);
//   });

  };
  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };
  // try {
  //   fetch('http://localhost:5000/user/user-details', {
  //     method: 'POST',
  //     body: {
  //         "user_id":"6382e40cf0eb6f646554850b",
  //         "full_name": "asdasd",
  //         "address": "asd",
  //         "phone" : "1223123"
  //     },
  //   });
  // } catch (error) {
  //   console.error(error);
  // }
  // dispatch(updateUserDetail( {
  //     "user_id":"6382e40cf0eb6f646554850b",
  //     "full_name": "asdasd",
  //     "address": "asd",
  //     "phone" : "1223123"
  // }));
  const handleSubmit = (event) => {
    event.preventDefault();
    const param = {
      token: profile.token,
      user_id: profile.result._id,
      full_name: fullName,
      address: `${
        provinces.find((pr) => pr.code === address.provinceCode).name
      } ${
        districts[address.provinceCode].find(
          (pr) => pr.code === address.districtCode
        ).name
      } ${
        wards[address.districtCode].find((pr) => pr.code === address.wardCode)
          .name
      } ${addressDetails}`,
      phone: phone,
    };
    // console.log(param)
    dispatch(updateUserDetail(param));
    setShowForm(false);
  };
  return (
    <div>
      {profile.details != null ? (
        <form onSubmit={handleSubmityswyg}>
          <div ref={editorRef} />
          <button type="submit">Submit</button>
          {content && <BlogContent content={content} />}
        </form>
      ) : (
        <div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Open Form
          </Button>
          <DetailsForm
            open={showForm}
            onClose={handleClose}
            onSubmit={handleSubmit}
            onFullName={setFullName}
            onAddress={setAddress}
            onAddressDetails={setAddressDetails}
            onPhone={setPhone}
          />
        </div>
      )}
    </div>
  );
}

function BlogContent({ content }) {
  return (
    <div>
      {content.ops.map((op) => {
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
  );
}
export default NewArticle;
