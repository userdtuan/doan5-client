import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Checkbox,
  TextField,
  Button,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { provinces, districts, wards } from "../addressList.js";


const Page1 = () => {
  const location = useLocation();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile)
  }, [location]);
  useEffect(() => {
    const editor = new Quill(editorRef.current, {
      theme: "snow",
    });
    quillRef.current = editor;
  }, []);
  const editorRef = useRef(null);
  // useRef hook to store a reference to the Quill editor instance
  const quillRef = useRef(null);
  const [formData, setFormData] = useState({
    gac_lung: false,
    nau_an: false,
    image: null,
    tieude: "",
    square: 0,
    content: null,
    so_nguoi: 0,
    image_wc: null,
    image_tu_cua:null,
    address:""
  });
  const [addressDetails, setAddressDetails] = useState("");
  const [address, setAddress] = useState({});


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? setFormData({ ...formData, [name]: checked })
      : setFormData({ ...formData, [name]: value });
  };
  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const content = quillRef.current.getContents();
    setFormData({ ...formData, content: content });
    let post = { ...formData, content: content }
    console.log(post);
    Axios.defaults.headers.common['Authorization'] = `Bearer ${profile.token}`;
    Axios.post("http://localhost:5000/articles/", 
    { post},
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

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Tieu de</FormLabel>
        <TextField
          type="text"
          name="tieude"
          value={formData.tieude}
          onChange={handleChange}
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Nau an</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              name="nau_an"
              checked={formData.nau_an}
              onChange={handleChange}
            />
          }
          label="Co"
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Gac Lung</FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              name="gac_lung"
              checked={formData.gac_lung}
              onChange={handleChange}
            />
          }
          label="Co"
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Image</FormLabel>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Image tu ngoai cua</FormLabel>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setFormData({ ...formData, image_tu_cua: base64 })}
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Image phong WC</FormLabel>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setFormData({ ...formData, image_wc: base64 })}
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Square</FormLabel>
        <TextField
          type="number"
          name="square"
          value={formData.square}
          onChange={handleChange}
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Số người ở tối đa</FormLabel>
        <TextField
          type="number"
          name="so_nguoi"
          value={formData.so_nguoi}
          onChange={handleChange}
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Content</FormLabel>
        <div ref={editorRef} />
      </FormControl>
      <br />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};
export default Page1;
