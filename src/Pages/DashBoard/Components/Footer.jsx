import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const StyledFooter = styled.footer`
  grid-area: ${props => props.gridarea};
  display: flex;
  align-items: flex-center;
  background-color: ${({ theme }) => theme.color.primary.hsl || 'black'};
  color: ${({ theme }) => theme.color.primary.contrastColor || 'white'};
  fill: ${({ theme }) => theme.color.primary.contrastColor || 'white'};
  padding: ${({ theme }) => theme.paddingSmall};
`;

const Link = inject('theme')(styled.a`
  color: ${({ theme }) => theme.color.primary.contrastColor};
`);

const Footer = ({ theme }) => (
  <StyledFooter theme={theme}>
    <p>
      {'Made with ♥ by '}
      <Link href="https://github.com/dev357" target="_blank">
        dev357
      </Link>
    </p>
  </StyledFooter>
);

export default inject('theme')(Footer);
