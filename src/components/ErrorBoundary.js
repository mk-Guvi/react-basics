import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    //it used to track the errror
    super();
    this.state = {
      hasError: false
    };
  }
  //if we use babel we can use below method else we need to use the constructor
  //   state={
  // hasError:false
  //   }

  //whenever an error occurs the static getDerivedStateFromError-method of the class component is called
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      //if anything goes wrong in the errorboundary component it will render the below
      //return <h1>SomeThing Went Wrong</h1>;
     // return null//this will hide the component
    } //if no error occurs return all the child elements directly
    return this.props.children;
  }
}

export default ErrorBoundary;
