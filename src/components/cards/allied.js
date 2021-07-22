import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorsStyle";
import image from "../../assets/images/logo-re.png";

export function CardAllied(props) {
  return (
    <Wrapped>
      <Image src={image} />
    </Wrapped>
  );
}

const Wrapped = styled.article`
  padding: 20px;
  display: grid;
  align-items: center;
  justify-content: center;
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

const Image = styled.img`
  width: 140px;
  height: 40px;
  object-fit: contain;
  margin: 0;
`;