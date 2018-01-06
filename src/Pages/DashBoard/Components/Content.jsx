import styled from 'styled-components';

const Content = styled.main`
  grid-area: ${props => props.gridarea || 'content'};
  height: 1500px;
  background-color: yellow;
  padding: 1.5rem;
`;

export default Content;
