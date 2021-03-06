import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../buttons/button";
import { Icon, media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { BodyIntro, BodyMain, H2, H3 } from "../styles/TextStyles";

export function CardService(props) {
  const { history } = props;

  function handleService() {
    localStorage.setItem("service", JSON.stringify(props));
    history.push("/work-info");
    scrollToTop();
  }
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  return (
    <Wrapped>
      <Cover {...props} />
      <Text>{props.title}</Text>
      <WrappedButton>
        <Button title="Más información" ghost onButton={handleService}/>
      </WrappedButton>
    </Wrapped>
  );
}

const Wrapped = styled.article`
  max-height: 380px;
  display: grid;
  grid-template-rows: 260px 1fr;
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
    grid-template-rows: 200px 1fr;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
    div {
      /* opacity: 1; */
      visibility: visible;
    }
    div {
      opacity: 1;
      animation-delay: 0.6s;
    }
  }
  div {
    opacity: 0;
    visibility: hidden;
  }
  @media (${media.tablet}) {
    max-height: 340px;
  }
`;

const Cover = (props) => (
  <WrappedImage>
    <Image src={props.image} />
  </WrappedImage>
);

const WrappedImage = styled.figure`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text = styled(H3)`
  font-weight: bold;
  color: ${themes.light.gray};
  margin: 0;
  padding: 0 30px;
  @media (${media.tablet}) {
    font-size: 1.2em;
    padding: 0 20px;
  }
`;

const WrappedButton = styled.div`
  padding: 0 30px 30px 30px;
  @media (${media.tablet}) {
    padding: 0 20px 20px 20px;
  }
`;
