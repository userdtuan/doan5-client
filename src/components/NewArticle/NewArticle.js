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
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { provinces, districts, wards } from "../addressList.js";
import ButtonDetail from "./ButtonDetail.js";

const NewArticle = () => {
  const location = useLocation();
  const [profile, setProfile] = useState({});
  const history = useHistory();
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile)
  }, [location]);
  useEffect(() => {
    const editor = new Quill(editorRef.current, {
      theme: "snow",
    });
    quillRef.current = editor;
  }, [profile]);
  const editorRef = useRef(null);
  // useRef hook to store a reference to the Quill editor instance
  const quillRef = useRef(null);
  const [formData, setFormData] = useState({
    gac_lung: false,
    nau_an: false,
    image: null,
    giatien:0,
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
  const handleAddressDetailChange = (event) => {
    setAddressDetails(event.target.value);

  };

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
  const handleSubmitCreate = (event) => {
    event.preventDefault();


    let a =  `${
      provinces.find((pr) => pr.code === address.provinceCode).name
    } ${
      districts[address.provinceCode].find(
        (pr) => pr.code === address.districtCode
      ).name
    } ${
      wards[address.districtCode].find((pr) => pr.code === address.wardCode)
        .name
    } ${addressDetails}`
    // console.log(a)


    const content = quillRef.current.getContents();
    setFormData({ ...formData, content: content });
    let post = { ...formData, content: content, address: a}
    console.log(post);
    Axios.defaults.headers.common['Authorization'] = `Bearer ${profile.token}`;
    Axios.post("http://localhost:5000/articles/", 
    { post},
    )
      .then(response => {
        alert(response.data);
        history.push('/');
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
    <div className="container" style={{backgroundColor: '#fff', borderRadius: 10, padding: 40}}>
      {profile.details != null ? (
      <form onSubmit={handleSubmitCreate}>
        <h4>Đăng tin</h4>
      <FormControl fullWidth >
        <FormLabel>Tiêu đề</FormLabel>
        <TextField
          type="text"
          name="tieude"
          value={formData.tieude}
          onChange={handleChange}
        />
      </FormControl>
      <br />
      <div className="row" style={{paddingTop: 20, paddingLeft: 20, justifyContent: 'space-between'}}>
        <FormControl >
          <FormLabel>Nấu ăn</FormLabel>
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
        <FormControl >
          <FormLabel>Gác lửng</FormLabel>
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
        <FormControl >
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
        <FormControl >
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
        <FormControl >
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
        <FormControl >
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
      </div>
      <br />
      <FormControl fullWidth margin="normal">
      <FormLabel>Tinh, Thành Phố</FormLabel>
              <Select
                name="provinceCode"
                value={address.provinceCode}
                onChange={handleAddressChange}
              >
                {provinces.map((province) => (
                  <MenuItem key={province.code} value={province.code}>
                    {province.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
            <FormLabel>Quận, Huyện</FormLabel>
              <Select
                name="districtCode"
                value={address.districtCode}
                onChange={handleAddressChange}
              >
                {districts[address.provinceCode]?.map((district) => (
                  <MenuItem key={district.code} value={district.code}>
                    {district.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
            <FormLabel>Phường</FormLabel>
              <Select
                name="wardCode"
                value={address.wardCode}
                onChange={handleAddressChange}
              >
                {wards[address.districtCode]?.map((ward) => (
                  <MenuItem key={ward.code} value={ward.code}>
                    {ward.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
      <br />
      <FormControl fullWidth >
        <FormLabel>Số nhà, tên đường</FormLabel>
        <TextField
              // label="Address Details"
              type="text"
              fullWidth
              margin="normal"
              required
              value={addressDetails}
              onChange={handleAddressDetailChange}
            />
      </FormControl>
      <br />
      <FormControl fullWidth >
        <FormLabel>Image</FormLabel>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
        />
      </FormControl>
      <br />
      <FormControl fullWidth >
        <FormLabel>Image tu ngoai cua</FormLabel>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setFormData({ ...formData, image_tu_cua: base64 })}
        />
      </FormControl>
      <br />
      <FormControl fullWidth >
        <FormLabel>Image phong WC</FormLabel>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setFormData({ ...formData, image_wc: base64 })}
        />
      </FormControl>
      <br />
      <FormControl fullWidth >
        <FormLabel>Dien tich</FormLabel>
        <TextField
          type="number"
          name="square"
          value={formData.square}
          onChange={handleChange}
        />
      </FormControl>
      <br />
      <FormControl fullWidth >
        <FormLabel>Giá phòng</FormLabel>
        <TextField
          type="number"
          name="giatien"
          value={formData.giatien}
          onChange={handleChange}
        />
      </FormControl>
      <br />
      <FormControl fullWidth >
        <FormLabel>Số người ở tối đa</FormLabel>
        <TextField
          type="number"
          name="so_nguoi"
          value={formData.so_nguoi}
          onChange={handleChange}
        />
      </FormControl>
      <br />
      <FormControl fullWidth style={{paddingTop: 20}}>
        <FormLabel>Content</FormLabel>
        <div ref={editorRef} />
      </FormControl>
      <br />
      <Button type="submit" variant="contained" color="primary" style={{marginTop: 30}}>
        Đăng tin
      </Button>
    </form>):(
      <ButtonDetail/>
    )}
    </div>
  );
};
export default NewArticle;