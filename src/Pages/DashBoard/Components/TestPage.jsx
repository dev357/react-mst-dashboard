import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const LargeText = styled.p`
  font-size: 5em;
  color: ${({ theme }) => theme.colorDark};
`;

const ColoredDiv = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${({ color }) => color};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const GroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TestPage = ({
  theme: {
    cPrimary, getColor, colors, primary, secondary,
  },
}) => {
  const cValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
  console.log(colors.get('green').hex);

  return (
    <Wrapper>
      <GroupWrapper>
        <ColoredDiv color={colors.get(primary).hex} />
        <ColoredDiv color={colors.get(secondary).hex} />
      </GroupWrapper>

      <br />

      <GroupWrapper>{cValues.map(c => <ColoredDiv key={c} color={cPrimary[c]} />)}</GroupWrapper>

      <br />

      <GroupWrapper>
        <GroupWrapper>
          {cValues.map(c => <ColoredDiv key={c} color={getColor(200, 50, 50, 1, c)} />)}
        </GroupWrapper>
      </GroupWrapper>
    </Wrapper>
  );
};

export default inject('theme')(observer(TestPage));
