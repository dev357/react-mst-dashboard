import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import RouterStore from 'Stores/RouterStore';
import modelOf from 'lib/mstPropTypeHelper';

const StyledLink = inject('theme')(styled.a`
  color: ${({ theme }) => theme.color.black.hsl};
  padding-top: ${({ theme }) => theme.paddingSmall};
  padding-bottom: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  padding-left: ${({ theme }) => `calc(2 * ${theme.paddingSmall})`};
  margin-bottom: 0.2rem;

  :hover {
    background-color: ${({ theme }) => theme.color.primary.getColor(7).hsl};
  }
`);

const ActiveStyledLink = inject('theme')(StyledLink.extend`
  background-color: ${({ theme }) => theme.color.primary.getColor(7).hsl};
`);

const DrawerLink = ({ to, children, router: { route, goTo } }) => {
  const active = to === route;
  return active ? (
    <ActiveStyledLink onClick={() => goTo(to)}>{children}</ActiveStyledLink>
  ) : (
    <StyledLink onClick={() => goTo(to)}>{children}</StyledLink>
  );
};

DrawerLink.propTypes = {
  router: modelOf(RouterStore).isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default inject('router')(observer(DrawerLink));
