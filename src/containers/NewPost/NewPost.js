import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import classes from "./NewPost.module.css";
import axios from "../../axios-instance";

class NewPost extends Component {
  state = {
    Form: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Title",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      body: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Content",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Enter Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail:true
        },
        valid: false,
        touched: false,
      },
      author: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Author Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      number: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Enter Any Number of 5 Digits",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    loading: false,
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.Form,
    };
    const updatedFormElement = {
      ...updatedForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ Form: updatedForm, formIsValid: formIsValid });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log("submitting..!");
    this.setState({
      loading:true
    })
    const formData = {};
    for (let formElementIdentifier in this.state.Form) {
      formData[formElementIdentifier] = this.state.Form[
        formElementIdentifier
      ].value;
    }
    console.log(formData);
    axios
      .post("/posts", formData)
      .then((result) => {
        console.log("done..!");
        this.props.history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.Form) {
      formElementsArray.push({
        id: key,
        config: this.state.Form[key],
      });
    }
    console.log(formElementsArray);
    let form = (
      <form onSubmit={this.submitHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <button className={classes.Btn} disabled={!this.state.formIsValid}>
          Submit
        </button>
      </form>
    );
     if(this.state.loading){
       form=(
         <p style={{textAlign:"center" ,fontSize:"2rem"}}>
           Loading...
         </p>
       )
     }
    return <div className={classes.NewPost}>{form}</div>;
  }
}
export default NewPost;
