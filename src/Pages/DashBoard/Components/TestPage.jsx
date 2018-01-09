import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const LightnessText = styled.p`
  font-size: 1em;
  color: ${({ color }) => color};
`;

const ColoredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  padding-bottom: 1rem;
`;

const ColorName = styled.p`
  padding-left: 1rem;
`;

const TestPage = ({
  theme: {
    cPrimary, getColor, colors, primary, secondary,
  },
}) => {
  const cValues = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90];

  return (
    <Wrapper>
      <GroupWrapper>
        <ColoredDiv color={colors.get(primary).hex} />
        <ColoredDiv color={colors.get(secondary).hex} />
      </GroupWrapper>

      <GroupWrapper>
        {colors.keys().map(key => <ColoredDiv color={colors.get(key).hsl} />)}
      </GroupWrapper>

      {colors.keys().map((key) => {
        const mainColor = colors.get(key);
        return (
          <GroupWrapper>
            {cValues.map((c) => {
              const color = mainColor.lighten(c);
              return (
                <ColoredDiv color={color.hsl}>
                  <LightnessText color={color.contrastColor}>{c}</LightnessText>
                </ColoredDiv>
              );
            })}
            <ColorName>{colors.get(key).name}</ColorName>
          </GroupWrapper>
        );
      })}
    </Wrapper>
  );
};

export default inject('theme')(observer(TestPage));
