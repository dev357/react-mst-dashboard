import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const LargeText = styled.p`
  font-size: 5em;
  color: ${({ theme }) => theme.colorDark};
`;

const TestPage = () => (
  <div>
    <LargeText>TEXT</LargeText>
  </div>
);

export default observer(TestPage);
