import styled from 'styled-components';

const AppBar = styled.header.attrs({
  gridarea: props => props.gridarea || 'header',
})`
  grid-area: ${props => props.gridarea};
  background-color: magenta;
`;

export default AppBar;
