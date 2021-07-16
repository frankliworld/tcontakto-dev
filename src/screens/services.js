import React from "react";
import styled from "styled-components";
import { CardService } from "../components/cards/service";
import { media } from "../components/io";
import { Master } from "../components/layout/master";
import { Section } from "../components/sections/section";
import { Wrapper } from "../components/styles/TextStyles";

export function Services(props) {
  return (
    <Master {...props}>
      <Section
        title="Servicios"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
      >
        <GridService>
          {data_services.map((i) => (
            <CardService key={i.id} image={i.image} title={i.title} />
          ))}
        </GridService>
      </Section>
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

const data_services = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Atención al Cliente",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Televentas y Marketing",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Toma de Pedidos",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Cobranzas Telefónicas",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Help Desk",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Servicios BPO",
    },
  ];
  
