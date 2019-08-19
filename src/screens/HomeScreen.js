import React, { Component } from "react";
import SampleComponent from "@components/SampleComponent";

export default class HomeScreen extends Component {
  componentDidMount() {
    //  SplashScreen.hide();
  }

  render() {
    return (
      <SampleComponent />
    );
  }
}
