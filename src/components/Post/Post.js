import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.Post}>
      <h3 style={{ textAlign: "center" }}>{props.title}</h3>
      <p>{props.body}</p>
      <button className={classes.Btn} onClick={props.clicked}>
        Read More
      </button>
    </div>
  );
};

export default Post;
