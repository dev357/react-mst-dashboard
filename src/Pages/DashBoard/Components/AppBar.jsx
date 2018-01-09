import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import MenuIcon from 'mdi-react/MenuIcon';

const StyledHeader = styled.header`
  grid-area: ${props => props.gridArea};
  background-color: ${props => props.theme.primary.hsl};
  color: ${props => props.theme.primary.contrastColor};
  fill: ${props => props.theme.primary.contrastColor};
  display: flex;
  padding-left: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  align-items: center;
  justify-content: space-between;
`;

const StyledMenuIcon = styled(MenuIcon)`
  transition: transform 0.2s;

  :hover {
    transform: scale(1.4, 1.4);
  }
`;

const AppBar = ({ theme, toggleNavBarOpen, router }) => (
  <StyledHeader theme={theme}>
    <StyledMenuIcon onClick={toggleNavBarOpen} />
    <p>route: {router.route.url}</p>
    <p>Log In</p>
  </StyledHeader>
);

export default inject('theme', 'router')(observer(AppBar));
