import React, { PureComponent } from 'react';
import Store from './Stores';
import modelOf from './lib/mstPropTypeHelper';
import DashBoard from './Pages/DashBoard/DashBoard';

export default class App extends PureComponent {
  static propTypes = {
    store: modelOf(Store).isRequired,
  };
  render() {
    return <DashBoard store={this.props.store} />;
  }
}
