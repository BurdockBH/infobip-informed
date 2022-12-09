import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CommentsList({ comments }: any) {
  return (
    <div className="comment-list">
      {comments.map((comment: any, index: any) => (
        <Card
          sx={{ width: "30%", margin: "auto", "margin-bottom": "5px" }}
          key={index}
        >
          <CardContent>{comment}</CardContent>
        </Card>
      ))}
    </div>
  );
}
