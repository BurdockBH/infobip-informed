import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

export default function AddComment({ handleComments }: any) {
  const [text, setText] = useState("");
  return (
    <div className="add-comment">
      <TextField
        id="outlined-basic"
        label="Add Comment"
        variant="outlined"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <Button
        onClick={() => {
          handleComments(text);
          setText("");
        }}
      >
        Submit
      </Button>
    </div>
  );
}
