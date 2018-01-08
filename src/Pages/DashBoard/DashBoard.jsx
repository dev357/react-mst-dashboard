import React, { Component } from 'react';
import Store from 'Stores';
import modelOf from 'lib/mstPropTypeHelper';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import AppBar from './Components/AppBar';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Wrapper from './Components/Wrapper';
import Drawer from './Components/Drawer';
import TestPage from './Components/TestPage';
import AppBarContent from './Components/AppBarContent';
import DrawerContent from './Components/DrawerContent';

const Link = styled.a`
  color: ${({ theme }) => theme.textColorLight};
`;

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
    const { navBarState: { open, docked } } = this.props.store.view;
    return (
      <div>
        <Wrapper docked={docked}>
          <AppBar gridarea="header" test={this.props.store.theme}>
            <AppBarContent
              toggleNavBarOpen={this.toggleNavBarOpen}
              router={this.props.store.router}
            />
          </AppBar>

          <Content gridarea="content">
            <TestPage />
          </Content>

          <Footer gridarea="footer">
            <p>
              {'Made with ♥ by '}
              <Link href="https://github.com/dev357" target="_blank">
                dev357
              </Link>
            </p>
          </Footer>
        </Wrapper>
        <Drawer toggleNavBarOpen={this.toggleNavBarOpen} open={open} docked={docked}>
          <DrawerContent
            view={this.props.store.view}
            router={this.props.store.router}
            headingTest={this.props.store.headingTest}
          />
        </Drawer>
      </div>
    );
  }
}
