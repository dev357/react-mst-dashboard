import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import MenuIcon from 'mdi-react/MenuIcon';

const Wrapper = styled.div`
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

const AppBarContent = ({ toggleNavBarOpen, router }) => (
  <Wrapper>
    <StyledMenuIcon onClick={toggleNavBarOpen} />
    <p>route: {router.route}</p>
    <p>Log In</p>
  </Wrapper>
);

export default observer(AppBarContent);
