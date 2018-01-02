import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Button from "material-ui/Button";
import TestComponent from "./TestComponent";

@observer
export default class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.store.headingTest}</h1>
        <TestComponent store={this.props.store} />
        <Button>Hello World</Button>
      </div>
    );
  }
}
