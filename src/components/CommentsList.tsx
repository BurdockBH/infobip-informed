import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CommentsList({ comments }: any) {
  return (
    <div className="comment-list">
      {comments.map((comment: any, index: any) => (
        <Card
          sx={{
            width: "30%",
            margin: "auto",
            "margin-bottom": "5px",
            padding: "0",
          }}
          key={index}
        >
          <CardContent sx={{ padding: 0 }}>
            <p className="comment-paragraph">{comment.content}</p>
            <p className="comment-time">{comment.currentTime}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
