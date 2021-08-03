import React from "react";
import styled from "styled-components";
import { Button } from "../buttons/button";
import { Icon, media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { H2, TextSmall, Wrapper } from "../styles/TextStyles";

export default function WrappedHome(props) {

  function toContact() {
    let parent = document.getElementById("history-start");
    parent.scrollIntoView();
  }

  return (
    <Container>
      <Column>
        <Title>TCONTAKTO</Title>
        <Description>
          Somos una empresa peruana que brinda servicios de Contact Center, campañas de telemarketing, atención al cliente, toma de pedidos y cobranzas.
        </Description>
        <Row>
          <Button title="Conocenos" onButton={toContact}/>
          {/* <Button title="Leer más" ghost /> */}
        </Row>
      </Column>
      <Image>
        <Icon icon="io-home-swipe" />
      </Image>
    </Container>
  );
}
const Container = styled(Wrapper)`
  min-height: 400px;
  display: grid;
  grid-template-columns: 440px 1fr;
  gap: 100px;
  
  ${themes.light.card};
  @media (${media.tablet}) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
  }
`;
const Title = styled(H2)`
  z-index: 2;
  color: ${themes.light.gray};
`;
const Description = styled(TextSmall)`
  z-index: 2;
  color: ${themes.light.gray};
`;
const Column = styled.div`
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  @media (${media.tablet}) {
    padding: 0 0 100px 0;
  }
`;
const Row = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: flex-end;
`;
const Image = styled(Column)`
  padding: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  
  svg {
    width: 100%;
    height: auto;
    max-height: 400px;
  }
`;
