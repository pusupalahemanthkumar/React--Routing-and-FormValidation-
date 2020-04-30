import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import NewPost from "./containers/NewPost/NewPost";
import SinglePost from "./containers/SinglePost/SinglePost";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/new-post" component={NewPost} />
              <Route path="/posts/:id" component={SinglePost} />
              <Route path="/posts" component={HomePage} />
              {/* <Route path="/" exact component={HomePage} /> */}
              <Redirect from="/" to="/posts" />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
