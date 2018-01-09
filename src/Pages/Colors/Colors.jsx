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

const Wrapper = inject('theme')(styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`);

const GroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 1rem;
`;

const ColorName = styled.p`
  padding-left: 1rem;
`;

const Colors = ({
  theme: {
    colors, primary, secondary, setPrimary,
  }, theme,
}) => {
  const lValues = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90];

  return (
    <Wrapper>
      <GroupWrapper>
        <ColoredDiv color={primary.hsl} />
        <ColoredDiv color={secondary.hsl} />
      </GroupWrapper>

      <GroupWrapper>
        {colors
          .keys()
          .map(key => (
            <ColoredDiv key={key} color={colors.get(key).hsl} onClick={() => setPrimary(key)} />
          ))}
      </GroupWrapper>

      {colors.keys().map((key) => {
        const mainColor = colors.get(key);
        return (
          <GroupWrapper key={key}>
            {lValues.map((l) => {
              const color = mainColor.getColor(l);
              return (
                <ColoredDiv key={l} color={color.hsl}>
                  <LightnessText color={color.contrastColor}>{l}</LightnessText>
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

export default inject('theme')(observer(Colors));
