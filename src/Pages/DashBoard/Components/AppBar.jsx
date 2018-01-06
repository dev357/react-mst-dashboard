import styled from 'styled-components';

const AppBar = styled.header`
  grid-area: ${props => props.gridarea || 'header'};
  background-color: ${({ theme }) => theme.colorSecondary};
  display: flex;
  padding-left: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  align-items: center;
  justify-content: space-between;

  svg:hover {
    fill: gray;
  }
`;

AppBar.defaultProps = {
  theme: {
    colorSecondary: 'blue',
    paddingSmall: '1rem',
  },
};

export default AppBar;
