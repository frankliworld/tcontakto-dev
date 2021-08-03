import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorsStyle";
import {
  BodyIntro,
  BodyMain,
  MediumText,
  TextSmall,
} from "../styles/TextStyles";

export function Input(props) {
  if(props.area) {
    return (
        <Wrapped {...props}>
          <Label>{props.name}</Label>
          <BaseArea {...props} placeholder={props.name}/>
        </Wrapped>
      );
  }
  return (
    <Wrapped {...props}>
      <Label>{props.name}</Label>
      <Base {...props} placeholder={props.name}/>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  display: grid;
  align-items: center;
  gap: 4px;
  ${props => props.gridArea && `grid-area: ${props.gridArea};`}
`;
const Label = styled(MediumText)`
  color: ${themes.light.gray};
  margin: 0;
  font-size: 16px;
`;
const Base = styled.input`
  border: 1px solid rgba(153, 144, 134, 0.5);
  background: white;
  height: 40px;
  width: 100%;
  border-radius: 10px;
  padding: 0 20px;
  :focus {
    outline: none !important;
    border-color: ${themes.light.primary};
    background-color: rgba(255,255,255,0.6);
    box-shadow: 0px 50px 100px rgba(${themes.light.primary},0.3), inset 0 0 0 0.5px rgba(${themes.light.primary},0.6);
  }
`;

const BaseArea = styled.textarea`
  border: 1px solid rgba(153, 144, 134, 0.5);
  background: white;
  height: 90px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  color: ${themes.light.gray};
  :focus {
    outline: none !important;
    border-color: ${themes.light.primary};
    background-color: rgba(255,255,255,0.6);
    box-shadow: 0px 50px 100px rgba(${themes.light.primary},0.3), inset 0 0 0 0.5px rgba(${themes.light.primary},0.6);
  }
`;
