import styled from 'styled-components';

const Content = styled.main`
  grid-area: ${props => props.gridarea || 'content'};
  background-color: ${({ theme }) => theme.colorWhite};
  padding: ${({ theme }) => theme.paddingSmall};
`;

export default Content;
