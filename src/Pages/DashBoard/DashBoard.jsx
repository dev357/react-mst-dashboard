import React, { Component } from 'react';
import Store from 'Stores';
import modelOf from 'lib/mstPropTypeHelper';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

import Colors from 'Pages/Colors/Colors';

import AppBar from './Components/AppBar';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Wrapper from './Components/Wrapper';
import Drawer from './Components/Drawer';
import DrawerContent from './Components/DrawerContent';

@observer
export default class DashBoard extends Component {
  static propTypes = {
    store: modelOf(Store).isRequired,
  };

  toggleNavBarOpen = () => {
    this.props.store.view.toggleNavBarOpen();
  };
  toggleNavBarDocked = () => {
    this.props.store.view.toggleNavBarDocked();
  };
  goTo = (route) => {
    this.props.store.router.goTo(route);
  };

  render() {
    const { router, view, headingTest } = this.props.store;
    const { navBarState: { open, docked } } = view;
    const { route } = router;
    return (
      <div>
        <Wrapper docked={docked}>
          <AppBar gridarea="header" toggleNavBarOpen={this.toggleNavBarOpen} />

          <Content gridarea="content">{route.component}</Content>

          <Footer gridarea="footer" />
        </Wrapper>
        <Drawer toggleNavBarOpen={this.toggleNavBarOpen} open={open} docked={docked}>
          <DrawerContent view={view} router={router} headingTest={headingTest} />
        </Drawer>
      </div>
    );
  }
}
