import React, { useRef, useEffect, useState } from "react";
import Axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
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

function ButtonDetail({name, user_profile}) {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState({});
  const [addressDetails, setAddressDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [addressud, setAddressud] = useState("");
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile);
  }, [location]);
  // useRef hook to store a reference to the Quill editor element
  // const editorRef = useRef(null);
  // // useRef hook to store a reference to the Quill editor instance
  // const quillRef = useRef(null);

  // // useState hook to store the contents of the Quill editor
  // const [content, setContent] = useState(null);
  // // useEffect hook to initialize the Quill editor
  // useEffect(() => {
  //   const editor = new Quill(editorRef.current, {
  //     theme: "snow",
  //   });
  //   quillRef.current = editor;
  // }, [profile]);

//   useEffect(() => {
//         Axios.get('http://localhost:5000/articles/', {
//   headers: {
//     'Content-Type': 'application/json',
//   }
// })
//   .then(response => {
//     // The data is available in the response.data property
//     setContent(response.data[response.data.length-1].title);
//   })
//   .catch(error => {
//     // An error occurred
//     console.error(error);
//   });
//   }, []);

//   const handleSubmityswyg = (event) => {
//     event.preventDefault();
//     Axios.defaults.headers.common['Authorization'] = `Bearer ${profile.token}`;
//     Axios.post("http://localhost:5000/articles/", 
//       {
//         title:content
//       },
//     )
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });

// //     Axios.get('http://localhost:5000/posts/', {
// //   headers: {
// //     'Content-Type': 'application/json',
// //   }
// // })
// //   .then(response => {
// //     // The data is available in the response.data property
// //     console.log(response.data);
// //   })
// //   .catch(error => {
// //     // An error occurred
// //     console.error(error);
// //   });

//   };
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
  const handleUpdate = (event) => {
    event.preventDefault();
    const param = {
      token: profile.token,
      user_id: profile.result._id,
      full_name: fullName,
      address: addressud,
      phone: phone
    }
    // console.log(param)
    Axios.post(
      `http://localhost:5000/user/update`,param,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        // console.error(response.data);
        localStorage.setItem("profile", JSON.stringify({ ...response.data }));
        window.location.reload();
      })
      .catch((error) => {
        // An error occurred
        console.error(error);
      });
    // http://localhost:5000/user/update
  };
  return (
    <div>
        <div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            {name ? name : "Open Form"}
          </Button>
          <DetailsForm
            open={showForm}
            onClose={handleClose}
            onSubmit={handleSubmit}
            onFullName={setFullName}
            onAddress={setAddress}
            onAddressDetails={setAddressDetails}
            onPhone={setPhone}
            userProfile = {user_profile}
            onAddressud = {setAddressud}
            onUpdate={handleUpdate}
          />
        </div>

    </div>
  );
}
export default ButtonDetail;
