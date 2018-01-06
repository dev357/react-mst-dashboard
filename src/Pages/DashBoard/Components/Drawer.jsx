import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDrawer = styled.nav`
  position: fixed;
  left: ${({ open, theme }) => (open ? 0 : `-${theme.drawerWidth}`)};
  width: ${({ theme }) => theme.drawerWidth};
  height: 100vh;
  transition: left ${({ theme }) => theme.drawerTransitionTime};
  ${({ docked, open }) => !docked && open && 'box-shadow: 0 0 50px rgba(0, 0, 0, 1);'};
  ${({ docked, open, theme }) => docked && open && `border-right: 1px solid ${theme.colorMedium}`};
  background-color: ${({ theme }) => theme.colorLight};
`;

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
`;

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

export default Drawer;
