import React from "react";
import styled from "styled-components";
import { CardService } from "../components/cards/service";
import { media } from "../components/io";
import { Master } from "../components/layout/master";
import { themes } from "../components/styles/ColorsStyle";
import { BodyMain, H2, H3, Wrapper } from "../components/styles/TextStyles";

import imageService1 from "../assets/images/services/service-1.jpg";
import imageService2 from "../assets/images/services/service-2.jpeg";
import imageService3 from "../assets/images/services/service-3.jpeg";
import imageService4 from "../assets/images/services/service-4.jpeg";
import imageService5 from "../assets/images/services/service-5.jpeg";
import imageService6 from "../assets/images/services/service-6.jpeg";


export function Work(props) {
  return (
    <Master {...props}>
      <Title>Ofertas de Trabajo</Title>
      <GridService>
        {data_services.map((i) => (
          <CardService key={i.id} image={i.image} title={i.title} />
        ))}
      </GridService>
      <Description>¿Quieres ser parte de la familia de TCONTAKTO? Postula a un puesto de tu interés y trabaja con nosotros.</Description>
    </Master>
  );
}

const GridService = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 70px;
  @media (${media.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  @media (${media.movil}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Title = styled(H3)`
  font-weight: bold;
  color: ${themes.light.primary};
  text-align: center;
  margin: 80px auto;
`;

const Description = styled(BodyMain)`
  text-align: center;
  color: ${themes.light.primary};
  margin: 100px auto;
`
const data_services = [
  {
    id: 1,
    image: imageService1,
    title: "Atención al Cliente",
  },
  {
    id: 2,
    image: imageService2,
    title: "Televentas y Marketing",
  },
  {
    id: 3,
    image: imageService3,
    title: "Toma de Pedidos",
  },
  {
    id: 4,
    image: imageService4,
    title: "Cobranzas Telefónicas",
  },
  {
    id: 5,
    image: imageService5,
    title: "Help Desk",
  },
  {
    id: 6,
    image: imageService6,
    title: "Servicios BPO",
  },
];