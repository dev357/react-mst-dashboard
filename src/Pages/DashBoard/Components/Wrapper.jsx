import styled from 'styled-components';
import { observer } from 'mobx-react';

const Content = styled.div`
  display: grid;
  position: fixed;
  left: ${({ docked, theme }) => (docked ? theme.drawerWidth : 0)};
  height: 100vh;
  width: ${({ docked, theme }) => (docked ? `calc(100vw - ${theme.drawerWidth})` : '100vw')};
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colorLight};
  transition: width ${({ theme }) => theme.drawerTransitionTime},
    left ${({ theme }) => theme.drawerTransitionTime};
  grid-template-columns: auto;
  grid-template-rows: ${({ theme }) => theme.appBarHeight} auto ${({ theme }) => theme.footerHeight};
  grid-template-areas:
    'header'
    'content'
    'footer';
`;

export default observer(Content);
