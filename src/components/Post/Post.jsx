import React from "react";
import { Link, Navigate, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  //   Initialize the hook.
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Now we will use this navigate function.
    navigate(`/posts/${id} `);
  };
  return (
    <div style={{ border: "2px solid red" }}>
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
      {/* Clicking this button will now take you home.
       */}
      <button onClick={handleNavigate}>Details of : {id}</button>
    </div>
  );
};

export default Post;
