import React, { Component } from 'react';
import Store from 'Stores';
import modelOf from 'lib/mstPropTypeHelper';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import MenuIcon from 'mdi-react/MenuIcon';
import LockIcon from 'mdi-react/LockOutlineIcon';
import LockOpenIcon from 'mdi-react/LockOpenOutlineIcon';

import AppBar from './Components/AppBar';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Wrapper from './Components/Wrapper';
import Drawer from './Components/Drawer';

const ContentText = styled.p`
  font-size: 5em;
  color: palevioletred;
`;

const DrawerHeader = styled.div`
  display: flex;
  padding-right: 1rem;
  align-items: center;
  justify-content: flex-end;
  height: 40px;

  svg:hover {
    fill: gray;
  }
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

  render() {
    const { navBarState: { open, docked } } = this.props.store.view;
    return (
      <div>
        <Wrapper docked={docked}>
          <AppBar gridarea="header">
            <MenuIcon onClick={this.toggleNavBarOpen} />
            <p>Log In</p>
          </AppBar>

          <Content gridarea="content">
            <ContentText>LOREM IPSUM</ContentText>
          </Content>

          <Footer gridarea="footer" />
        </Wrapper>
        <Drawer toggleNavBarOpen={this.toggleNavBarOpen} open={open} docked={docked}>
          <DrawerHeader>
            {open && docked ? (
              <LockIcon onClick={this.toggleNavBarDocked} />
            ) : (
              <LockOpenIcon onClick={this.toggleNavBarDocked} />
            )}
          </DrawerHeader>
        </Drawer>
      </div>
    );
  }
}
