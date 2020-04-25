import React, { Component } from "react";
import classes from "./HomePage.module.css";

class HomePage extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Post}>
          <h3 style={{textAlign:"center"}}>Title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p> 
          <button className={classes.Btn}>Read More</button>
        </div>
        <div className={classes.Post}>
          <h3 style={{textAlign:"center"}}>Title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p> 
          <button className={classes.Btn}>Read More</button>
        </div>
        <div className={classes.Post}>
          <h3 style={{textAlign:"center"}}>Title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p> 
          <button className={classes.Btn}>Read More</button>
        </div>
      </div>
    );
  }
}
export default HomePage;
