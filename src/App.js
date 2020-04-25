import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import NewPost from "./containers/NewPost/NewPost";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/"  exact component={HomePage} />
              <Route path="/new-post" exact component={NewPost} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
