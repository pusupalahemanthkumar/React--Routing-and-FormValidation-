import React, { Component } from "react";
import axios from "../../axios-instance";
import classes from "./SinglePost.module.css";

class SinglePost extends Component {
  state = {
    post: null,
    error: false,
    loading: true,
  };
  componentDidUpdate() {
    this.fetchData();
  }
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.fetchData();
  }
  fetchData = () => {
    if (
      !this.state.post ||
      (this.state.post && this.state.post.id !== +this.props.match.params.id)
    ) {
      axios
        .get("/posts/" + this.props.match.params.id)
        .then((result) => {
          this.setState({
            post: result.data,
            loading: false,
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            error: err,
          });
        });
    }
  };
  render() {
    let post = <p>something Went Wrong</p>;
    if (!this.state.error && this.state.loading) {
      post = (
        <p style={{ textAlign: "center", fontSize: "2rem", color: "#fff" }}>
          Loading......
        </p>
      );
    }
    if (!this.state.error && this.state.post) {
      post = (
        <div className={classes.Post}>
          <h3 style={{ textAlign: "center" }} id="title">
            {this.state.post.title}
          </h3>
          <p>{this.state.post.body}</p>
        </div>
      );
    }
    return <div> {post}</div>;
  }
}

export default SinglePost;
