import React from "react";
import styled from "styled-components";
import { Button } from "../buttons/button";
import { Icon, media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { MediumText, TextSmall, Wrapper } from "../styles/TextStyles";

export function Header(props) {
  return (
    <Wrapped>
      <Icon icon="io-logo" />
      <ListNav>
        {data.map((i) => (
          <Text key={i.id}>{i.name}</Text>
        ))}
      </ListNav>
      <Button title="Iniciar sesion"/>
    </Wrapped>
  );
}

const Wrapped = styled(Wrapper)`
  z-index: 1;
  display: grid;
  grid-template-columns: 300px 1fr auto;
  gap: 20px;
  align-items: center;
  height: 60px;
  ${themes.light.card}
  @media (${media.tablet}) {
    grid-template-columns: 1fr auto;
  }
`;

const Text = styled(MediumText)`
  color: ${themes.light.gray};
  line-height: 1;
  margin: 0;
  padding: 10px 20px;
  font-weight: 600;
`;

const ListNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (${media.tablet}) {
    display: none;
  }
`;

const data = [
  { id: 1, name: "Inicio", status: true },
  { id: 2, name: "Servicios", status: false },
  { id: 3, name: "Contactanos", status: false },
  { id: 4, name: "Trabaja con nosotros", status: false },
];
