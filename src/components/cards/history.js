import React from "react";
import styled from "styled-components";
import { Icon } from "../io";
import { themes } from "../styles/ColorsStyle";
import { BodyMain, TextSmall } from "../styles/TextStyles";

export function CardHistory(props) {
  return (
    <Wrapped>
      <Title>{props.title}</Title>
      <Detailed>{props.description}</Detailed>
    </Wrapped>
  );
}

const Wrapped = styled.article`
  position: relative;
  padding: 35px;
  margin-top: 20px;
  display: grid;
  background: #ffffff;
  border: 0.5px solid ${themes.light.gray6};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  :hover {
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
`;

const Title = styled(BodyMain)`
  font-weight: bold;
  color: ${themes.light.gray};
`;

const Detailed = styled(TextSmall)`
  margin: 0;
  color: ${themes.light.gray};
`;
