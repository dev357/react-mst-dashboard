import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const StyledDrawer = inject('theme')(styled.nav`
  position: fixed;
  left: ${({ open, theme }) => (open ? 0 : `-${theme.drawerWidth}`)};
  width: ${({ theme }) => theme.drawerWidth};
  height: 100vh;
  transition: left ${({ theme }) => theme.drawerTransitionTime};
  ${({ docked, open }) => !docked && open && 'box-shadow: 0 0 50px rgba(0, 0, 0, 1);'};
  ${({ docked, open, theme }) =>
    docked && open && `border-right: 1px solid ${theme.color.primary.getColor(15).hsl}`};
  background-color: ${({ theme }) => theme.color.primary.getColor(4).hsl}};
  overflow-y: auto;
`);

const Overlay = inject('theme')(styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.color.black.getColor(undefined, 0.4).hsla}};
  width: 100vw;
  height: 100vh;
`);

const Drawer = ({
  open, docked, toggleNavBarOpen, children,
}) => (
  <div>
    {open && !docked && <Overlay onClick={toggleNavBarOpen} />}
    <StyledDrawer open={open} docked={docked}>
      {children}
    </StyledDrawer>
  </div>
);

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  docked: PropTypes.bool.isRequired,
  toggleNavBarOpen: PropTypes.func.isRequired,
  children: PropTypes.node,
};

Drawer.defaultProps = {
  children: null,
};

export default observer(Drawer);
