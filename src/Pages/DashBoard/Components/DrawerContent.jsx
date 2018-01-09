import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

import LockIcon from 'mdi-react/LockOutlineIcon';
import LockOpenIcon from 'mdi-react/LockOpenOutlineIcon';

import DrawerLink from './DrawerLink';

const DrawerHeader = inject('theme')(styled.div`
  display: flex;
  padding-right: ${({ theme }) => theme.paddingSmall};
  padding-left: ${({ theme }) => theme.paddingSmall};
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => `calc(${theme.appBarHeight} - 1px)`};
  transition: all 0.5s;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.primary.getColor(15).hsl}`};

  svg {
    transition: transform 0.2s;
  }
  svg:hover {
    transform: scale(1.4, 1.4);
  }
`);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: stretch;
`;

const DrawerContent = ({
  view: { toggleNavBarDocked, navBarState: { open, docked } },
  router: { drawerLinks },
  headingTest,
}) => (
  <Wrapper>
    <DrawerHeader>
      <h3>{headingTest}</h3>
      {open && docked ? (
        <LockIcon onClick={toggleNavBarDocked} />
      ) : (
        <LockOpenIcon onClick={toggleNavBarDocked} />
      )}
    </DrawerHeader>
    <br />
    {drawerLinks.map(link => (
      <DrawerLink key={link.route} to={link.route}>
        {link.name}
      </DrawerLink>
    ))}
  </Wrapper>
);

export default observer(DrawerContent);
