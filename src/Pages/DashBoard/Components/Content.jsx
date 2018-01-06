import styled from 'styled-components';

const Content = styled.header`
  grid-area: ${props => props.gridarea || 'content'};
  height: 500px;
  background-color: yellow;
  padding: 1.5rem;
`;

export default Content;
