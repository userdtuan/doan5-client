import React, { useRef, useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
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
import UserDetailForm from "./UserDetailForm";

function Page1() {
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
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const content = quillRef.current.getContents();
    console.log(content);
    setContent(content);
  };
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // submit form data using your preferred method (e.g. HTTP request)
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
          Open Form
        </Button>
      <form onSubmit={handleSubmit}>
        <div ref={editorRef} />
        <button type="submit">Submit</button>
        {content && <BlogContent content={content} />}
        {<UserDetailForm showForm_pr={showForm} />}
      </form>
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
export default Page1;
