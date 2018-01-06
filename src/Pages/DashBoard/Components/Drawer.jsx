import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDrawer = styled.nav`
  position: fixed;
  left: ${({ open }) => (open ? 0 : '-100px')};
  width: 100px;
  height: 100vh;
  transition: left 0.6s;
  box-shadow: 0 0 5px rgba(0, 0, 0, 1);
  background-color: blue;
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
    <StyledDrawer open={open}>{children}</StyledDrawer>
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
