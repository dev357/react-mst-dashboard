import styled from 'styled-components';

const Content = styled.header.attrs({
  gridarea: props => props.gridarea || 'content',
})`
  grid-area: ${props => props.gridarea};
  height: 500px;
  background-color: yellow;
  padding: 1.5rem;
`;

export default Content;
