import React, { Component } from "react";
import DashBoard from "./Pages/DashBoard/DashBoard";
import { inject, observer } from "mobx-react";

export default class App extends Component {
  componentDidMount() {
    this.props.store.view.addResizeEventListener();
  }

  render() {
    return <DashBoard store={this.props.store} />;
  }
}
