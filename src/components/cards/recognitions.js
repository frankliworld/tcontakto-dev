import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorsStyle";
import { BodyMain } from "../styles/TextStyles";
import image from "../../assets/images/image-re.png";

export function CardRecognitions(props) {
  return (
    <Wrapped>
      <Image src={image} />
      <Text>{props.title}</Text>
    </Wrapped>
  );
}

const Wrapped = styled.article`
  max-height: 400px;
  padding: 30px;
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
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
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin: 0;
`;

const Text = styled(BodyMain)`
  font-weight: bold;
  color: ${themes.light.gray};
  margin: 0;
  text-align: center;
  line-height: 1;
`;
