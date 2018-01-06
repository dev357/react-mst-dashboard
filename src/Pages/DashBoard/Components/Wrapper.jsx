import styled from 'styled-components';
import { observer } from 'mobx-react';

const Content = styled.div.attrs({
  docked: (props) => {
    console.log(props);
    return props.docked || false;
  },
})`
  display: grid;
  position: absolute;
  right: 0;
  height: 100vh;
  width: ${props => (props.docked ? 'calc(100% - 100px)' : 'calc(100%)')}
  width: open ? 'calc(100% - 100px)' : 'calc(100%)',
  overflowY: scroll;
  background-color: lightgray;
  transition: width .6s;
  grid-template-columns: auto;
  grid-template-rows: 40px auto 40px;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export default observer(Content);
