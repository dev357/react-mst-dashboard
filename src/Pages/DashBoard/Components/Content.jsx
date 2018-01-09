import styled from 'styled-components';
import { inject } from 'mobx-react';

const Content = inject('theme')(styled.main`
  grid-area: ${props => props.gridarea || 'content'};
  background-color: ${({ theme }) => theme.color.primary.getColor(3).hsl};
  padding: ${({ theme }) => theme.paddingSmall};
`);

export default Content;
