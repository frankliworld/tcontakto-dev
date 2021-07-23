import React from "react";
import styled from "styled-components";
import { media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { H2, TextSmall, Wrapper } from "../styles/TextStyles";

export function Section(props) {
  return (
    <Wrapped {...props}>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      {props.children}
    </Wrapped>
  );
}

const Wrapped = styled(Wrapper)`
  padding-top: 100px;
  padding-bottom: 100px;
  display: grid;
  gap: 20px;
  @media (${media.tablet}) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
const Title = styled(H2)`
  text-align: center;
  color: ${themes.light.gray};
  margin: 0;
`;
const Description = styled(TextSmall)`
  text-align: center;
  color: ${themes.light.gray};
`;
