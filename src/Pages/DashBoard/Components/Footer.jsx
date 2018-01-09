import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

const Footer = styled.footer`
  grid-area: ${props => props.gridarea || 'footer'};
  display: flex;
  align-items: flex-center;
  background-color: ${({ theme }) => theme.color.primary.hsl || 'black'};
  color: ${({ theme }) => theme.color.primary.contrastColor || 'white'};
  fill: ${({ theme }) => theme.color.primary.contrastColor || 'white'};
  padding: ${({ theme }) => theme.paddingSmall};
`;

export default inject('theme')(observer(Footer));
