import React from "react";
import styled from "styled-components";
import { Button } from "../buttons/button";
import { Icon } from "../io";
import { themes } from "../styles/ColorsStyle";
import { BodyIntro, BodyMain, H2, H3, MediumText, TextSmall } from "../styles/TextStyles";

export function CardBlog(props) {
  return (
    <Wrapped>
      <Cover {...props} />
      <WrappedInfo>
        <Text>{props.title}</Text>
        <Description>{props.description}</Description>
        <Button title="Leer más" ghost />
      </WrappedInfo>
    </Wrapped>
  );
}

const Wrapped = styled.article`
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
const Cover = (props) => (
  <WrappedImage>
    <Image src={props.image} />
    <PublicationDate {...props}/>
  </WrappedImage>
);

const WrappedImage = styled.figure`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
`;

const PublicationDate = (props) => (
  <WrappedDate>
    <TextDate>{props.date}</TextDate>
  </WrappedDate>
);

const WrappedDate = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(40px);
  padding: 7px 13px;
  border-radius: 10px;
`
const TextDate = styled(TextSmall)`
  font-weight: bold;
  margin: 0;
`

const Text = styled(MediumText)`
  font-weight: bold;
  color: ${themes.light.primary};
  margin: 0;
`;
const Description = styled(MediumText)`
  color: ${themes.light.gray};
  margin: 0;
`;
const WrappedInfo = styled.div`
  padding: 30px;
  display: grid;
  gap: 10px;
`;
