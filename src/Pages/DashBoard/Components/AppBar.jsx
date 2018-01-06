import styled from 'styled-components';

const AppBar = styled.header`
  grid-area: ${props => props.gridarea || 'header'};
  background-color: magenta;
`;

export default AppBar;
