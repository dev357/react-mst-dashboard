import styled from 'styled-components';

const AppBar = styled.header`
  grid-area: ${props => props.gridarea || 'header'};
  background-color: magenta;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  justify-content: space-between;

  svg:hover {
    fill: gray;
  }
`;

export default AppBar;
