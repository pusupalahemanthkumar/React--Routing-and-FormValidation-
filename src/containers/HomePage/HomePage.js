import React, { Component } from "react";
import classes from "./HomePage.module.css";
import Post from "../../components/Post/Post";
import axios from "../../axios-instance";

class HomePage extends Component {
  state = {
    posts: null,
    error: false,
    loading: true,
    selectedId: null,
  };
  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 50);
        this.setState({ posts: posts, loading: false });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }
  postSelectedHandler = (id) => {
    console.log(id);
    this.props.history.push("/posts/" + id);
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong..!</p>;
    if (!this.state.error && this.state.loading) {
      posts = <p style={{ textAlign: "center" }}>Loading..!</p>;
    }

    if (!this.state.error && this.state.posts) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    return (
      <div>
        <div className={classes.Container}>{posts}</div>
      </div>
    );
  }
}
export default HomePage;
