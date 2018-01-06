import styled from 'styled-components';
import { observer } from 'mobx-react';

const Content = styled.div`
  display: grid;
  position: fixed;
  left: ${({ docked }) => (docked ? '100px' : 0)};
  height: 100vh;
  width: ${({ docked }) => (docked ? 'calc(100vw - 100px)' : '100vw')};
  overflow-y: scroll;
  background-color: lightgray;
  transition: width 0.6s, left 0.6s;
  grid-template-columns: auto;
  grid-template-rows: 40px auto 40px;
  grid-template-areas:
    'header'
    'content'
    'footer';
`;

export default observer(Content);
