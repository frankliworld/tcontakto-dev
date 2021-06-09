import React from "react";
import styled from "styled-components";
import { Icon, media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { MediumText, TextSmall, Wrapper } from "../styles/TextStyles";

export function Footer(props) {
  return (
    <Wrapped>
      <Column>
        <Icon icon="io-logo" />
      </Column>
      <Column>
        <Title>Quick Links</Title>
        <Link>Inicio</Link>
        <Link>Servicios</Link>
        <Link>Contactos</Link>
        <Link>Trabaja con nosotros</Link>
      </Column>
      <Column>
        <Title>Company</Title>
        <Link>Terminos y condiciones</Link>
        <Link>Politica de privacidad</Link>
        <Link>politica de cookies</Link>
        <Link>Blog</Link>
      </Column>
      <Column>
        <Title>Contact us</Title>
        <Link>Info@tcontakto.com</Link>
        <Link>Av. Alfredo Benavides 2150, Miraflores</Link>
        <Link>(01) 709 4870</Link>
      </Column>
    </Wrapped>
  );
}

const Wrapped = styled(Wrapper)`
  background: ${themes.light.gray6};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  @media (${media.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding-top: 20px;
  padding-bottom: 20px;
  }
  @media (${media.movil}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;
const Column = styled.div`
  
`;
const Title = styled(MediumText)`
  color: ${themes.light.gray};
  margin-bottom: 20px;
  font-weight: bold;
`;
const Link = styled(TextSmall)`
  color: ${themes.light.gray};
  margin: 0;
  padding: 5px 0;
  cursor: pointer;
  
  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  :hover {
    color: ${themes.light.primary};
    transform: translateY(-2px);
  }
`;
