import React from "react";
import styled from "styled-components";
import { Button } from "../buttons/button";
import { Icon } from "../io";
import { themes } from "../styles/ColorsStyle";
import { BodyIntro, BodyMain, H2, H3 } from "../styles/TextStyles";

export function CardService(props) {
  return (
    <Wrapped>
      <Icon {...props} />
      <Text>{props.title}</Text>
      <Button title="Leer más" ghost />
    </Wrapped>
  );
}

const Wrapped = styled.article`
  max-height: 400px;
  padding: 30px;
  display: grid;
  grid-template-rows: auto 66px;
  gap: 20px;
  background: #ffffff;
  border: 0.5px solid ${themes.light.gray6};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
  :hover {
    grid-template-rows: 180px 1fr 50px;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
    svg {
      height: 180px;
    }
    div {
      opacity: 1;
      visibility: visible;
    }
  }

  svg {
    width: 100%;
    height: 250px;
  }
  div {
    opacity: 0;
    visibility: hidden;
  }
`;

const Text = styled(H3)`
  font-weight: bold;
  color: ${themes.light.gray};
  margin: 0;
`;
