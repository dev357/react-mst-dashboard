import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { observer } from 'mobx-react';

import Store from './Stores';
import modelOf from './lib/mstPropTypeHelper';
import DashBoard from './Pages/DashBoard/DashBoard';

@observer
export default class App extends Component {
  static propTypes = {
    store: modelOf(Store).isRequired,
  };
  render() {
    return (
      <ThemeProvider theme={this.props.store.theme}>
        <DashBoard store={this.props.store} />
      </ThemeProvider>
    );
  }
}
