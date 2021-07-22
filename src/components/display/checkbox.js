import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorsStyle";
import { MediumText, TextSmall } from "../styles/TextStyles";

export function Checkbox(props) {
  return (
    <Wrapped className="checkbox">
      <Base type="checkbox" {...props} />
      <Label>{props.name}</Label>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  gap: 10px;
`;
const Label = styled(MediumText)`
  color: ${themes.light.gray};
  margin: 0;
  font-size: 16px;
`;
const Base = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
