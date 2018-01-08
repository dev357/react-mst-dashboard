import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { observer, Provider } from 'mobx-react';

import Store from './Stores';
import modelOf from './lib/mstPropTypeHelper';
import DashBoard from './Pages/DashBoard/DashBoard';

@observer
export default class App extends Component {
  static propTypes = {
    store: modelOf(Store).isRequired,
  };
  render() {
    const { store } = this.props;

    return (
      <Provider router={store.router} view={store.view} theme={store.theme}>
        <ThemeProvider theme={store.theme}>
          <DashBoard store={store} />
        </ThemeProvider>
      </Provider>
    );
  }
}
