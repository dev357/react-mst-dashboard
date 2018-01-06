import styled from 'styled-components';
import { observer } from 'mobx-react';

const AppBar = styled.header`
  grid-area: ${props => props.gridarea};
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.textColorLight};
  fill: ${({ theme }) => theme.textColorLight};
  display: flex;
  padding-left: ${({ theme }) => theme.paddingSmall};
  padding-right: ${({ theme }) => theme.paddingSmall};
  align-items: center;
  justify-content: space-between;
`;

AppBar.defaultProps = {
  theme: {
    colorPrimary: 'blue',
    textColorLight: 'white',
    paddingSmall: '1rem',
  },
  gridarea: 'header',
};

export default observer(AppBar);
