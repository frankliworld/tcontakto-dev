import React from "react";
import styled, { css } from "styled-components";
import { themes } from "../styles/ColorsStyle";
import { MediumText, TextSmall } from "../styles/TextStyles";

export function Button(props) {
  return (
    <Wrapped {...props}>
      <Text {...props}>{props.title}</Text>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  cursor: pointer;
  user-select: none;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${themes.light.primary};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  height: 50px;
  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  :hover {
    color: #ebd1eb;
    transform: translateY(-3px);
  }

  ${(p) =>
    p.ghost &&
    css`
      background: transparent;
      border-color: ${themes.light.primary};
    `}
`;
const Text = styled(MediumText)`
  padding: 0 50px;
  margin: 0;
  color: white;
  ${(p) =>
    p.ghost &&
    css`
      color: ${themes.light.primary};
    `}
`;
