import React, { useState, useRef, useEffect } from "react";
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

const Page1 = () => {
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
    nau_an: false,
    image: null,
    name: "",
    square: 0,
    content : null
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? setFormData({ ...formData, [name]: checked })
      : setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = quillRef.current.getContents();
    setFormData({...formData,content:content})
    console.log(formData);
    // Send the form data to the server or perform other actions here
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <FormLabel>Image</FormLabel>

        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
        />
      </FormControl>
      <br />
      <FormControl>
        <FormLabel>Name</FormLabel>
        <TextField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
