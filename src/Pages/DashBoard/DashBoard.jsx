import React, { Component } from 'react';
import Store from 'Stores';
import modelOf from 'lib/mstPropTypeHelper';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import AppBar from './Components/AppBar';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Wrapper from './Components/Wrapper';

const ContentText = styled.p`
  font-size: 5em;
  text-align: center;
  color: palevioletred;
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
        {open &&
          !docked && (
            <div
              onClick={this.toggleNavBarOpen}
              style={{
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,0.3)',
                width: '100vw',
                height: '100vh',
                zIndex: 5000,
              }}
            />
          )}
        <nav
          style={{
            position: 'absolute',
            left: open ? '0' : '-100px',
            width: '100px',
            height: '100vh',
            transition: 'left .6s',
            boxShadow: '0 0 5px rgba(0,0,0,1)',
            backgroundColor: 'blue',
            zIndex: 5001,
          }}
        >
          <button onClick={this.toggleNavBarDocked}>{`dock(${docked})`}</button>
        </nav>
        <Wrapper docked={docked}>
          <AppBar gridarea="header" />

          <Content gridarea="content">
            <ContentText>LOREM IPSUM</ContentText>
            <button onClick={this.toggleNavBarOpen}>{`open(${open})`}</button>
          </Content>

          <Footer gridarea="footer" />
        </Wrapper>
      </div>
    );
  }
}
