import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="commentItem">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={comment.user.avatar} alt="Photo" />
        <h3>{comment.user.name}</h3>
      </div>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
