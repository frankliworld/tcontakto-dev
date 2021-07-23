import React from "react";
import styled from "styled-components";
import { CardHistory } from "../cards/history";
import { media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { H2, TextSmall, Wrapper } from "../styles/TextStyles";

export function HistoryHome(props) {
  return (
    <Wrapped id="history-start">
      <Content>
        <Columns>
          <Title>Historia</Title>
          <Description>
            Somos una empresa de servicios de Outsourcing y Contact Center
            especializados en la venta presencial y por teléfono. Nacimos hace
            13 años y durante ese tiempo nos hemos enfocado en relacionarnos con
            clientes de manera transparente y con calidad en el servicio.
            Creemos fielmente que el trato con nuestros clientes finales se basa
            en la confianza y empatía, siempre brindando soluciones para ellos.
            Por ese motivo constantemente somos reconocidos por nuestros
            clientes del sector financiero y seguros por ser los N°1 en ventas.
          </Description>
        </Columns>
        <Columns>
          <CardHistory
            title="Misión"
            description="Ayudar a nuestros clientes a cumplir sus objetivos con las mejores soluciones BPO y Contact Center de manera innovadora, flexible y eficaz."
          />
          <CardHistory
            title="Visión"
            description="Liderar el rubro de BPO y Contact Center ofreciendo el mejor servicio para los clientes en base a personas comprometidas e íntegras."
          />
        </Columns>
      </Content>
    </Wrapped>
  );
}

const Wrapped = styled.div`
  padding: 100px 0;
  background: white;
`;
const Content = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  gap: 40px;
  @media (${media.tablet}) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`;
const Title = styled(H2)`
  color: ${themes.light.gray};
`;
const Description = styled(TextSmall)`
  color: ${themes.light.gray};
`;
const Columns = styled.div``;
