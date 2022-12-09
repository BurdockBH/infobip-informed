import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";

export default function AddComment({ handleComments }: any) {
  const [text, setText] = useState("");
  return (
    <Box className="add-comment" sx={{ "margin-left": "30%" }}>
      <TextField
        sx={{
          width: "600px",
          background: "white",
          "background-color": "white",
        }}
        id="outlined-basic"
        label="Add Comment"
        multiline={true}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <Button
        sx={{ display: "block" }}
        onClick={() => {
          handleComments(text);
          setText("");
        }}
      >
        Submit
      </Button>
    </Box>
  );
}