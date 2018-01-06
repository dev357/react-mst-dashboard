import React, { Component } from 'react';
import Store from 'Stores';
import modelOf from 'lib/mstPropTypeHelper';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import MenuIcon from 'mdi-react/MenuIcon';
import LockIcon from 'mdi-react/LockOutlineIcon';
import LockOpenIcon from 'mdi-react/LockOpenOutlineIcon';
import HeartIcon from 'mdi-react/HeartIcon';

import AppBar from './Components/AppBar';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Wrapper from './Components/Wrapper';
import Drawer from './Components/Drawer';

const ContentText = styled.p`
  font-size: 5em;
  color: ${({ theme }) => theme.colorDark};
`;

const DrawerHeader = styled.div`
  display: flex;
  padding-right: ${({ theme }) => theme.paddingSmall};
  padding-left: ${({ theme }) => theme.paddingSmall};
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => `calc(${theme.appBarHeight} - 1px)`};
  transition: all 0.5s;
  border-bottom: ${({ theme }) => `1px solid ${theme.colorMedium}`};

  svg {
    transition: transform 0.2s;
  }
  svg:hover {
    transform: scale(1.4, 1.4);
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  transition: transform 0.2s;

  :hover {
    transform: scale(1.4, 1.4);
  }
`;

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
          <AppBar gridarea="header">
            <StyledMenuIcon onClick={this.toggleNavBarOpen} />
            <p>route: {this.props.store.router.route}</p>
            <p>Log In</p>
          </AppBar>

          <Content gridarea="content">
            <ContentText>{`Current route: ${this.props.store.router.route}`}</ContentText>
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
          <DrawerHeader>
            <h3>{this.props.store.headingTest}</h3>
            {open && docked ? (
              <LockIcon onClick={this.toggleNavBarDocked} />
            ) : (
              <LockOpenIcon onClick={this.toggleNavBarDocked} />
            )}
          </DrawerHeader>
          <br />
          <button onClick={() => this.goTo('/foo')}>goto foo</button>
          <button onClick={() => this.goTo('/bar')}>goto bar</button>
          <button onClick={() => this.goTo('/')}>goto home</button>
        </Drawer>
      </div>
    );
  }
}
