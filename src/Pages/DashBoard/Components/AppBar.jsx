import React from 'react';
import PropTypes from 'prop-types';
import ThemeStore from 'Stores/ThemeStore';
import modelOf from 'lib/mstPropTypeHelper';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const StyledAppBar = styled.header`
  grid-area: ${props => props.gridArea};
  background-color: ${props => props.theme.primary.hsl};
  color: ${props => props.theme.primary.contrastColor};
  fill: ${props => props.theme.primary.contrastColor};
`;

const AppBar = ({ theme, children, gridArea }) => (
  <StyledAppBar theme={theme} gridArea={gridArea}>
    {children}
  </StyledAppBar>
);

AppBar.propTypes = {
  gridArea: PropTypes.string,
  children: PropTypes.node,
  theme: modelOf(ThemeStore).isRequired,
};

AppBar.defaultProps = {
  children: null,
  gridArea: 'header',
};

// export default inject('theme')(observer(AppBar));

const Test = styled.header`
  grid-area: ${props => props.gridArea};
  background-color: ${props => props.theme.primary.hsl};
  color: ${props => props.theme.primary.contrastColor};
  fill: ${props => props.theme.primary.contrastColor};
`;

export default inject('theme')(observer(Test));
