import React from "react";
import Card from "@mui/material/Card";

export default function CommentsList({ comments }: any) {
  return (
    <div className="comment-list">
      {comments.map((comment: any, index: any) => (
        <Card key={index}>{comment}</Card>
      ))}
    </div>
  );
}
