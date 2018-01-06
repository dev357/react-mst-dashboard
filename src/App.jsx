import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import Store from './Stores';
import modelOf from './lib/mstPropTypeHelper';
import DashBoard from './Pages/DashBoard/DashBoard';

export default class App extends PureComponent {
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
