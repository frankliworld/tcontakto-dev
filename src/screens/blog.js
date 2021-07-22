import React from "react";
import styled from "styled-components";
import { CardBlog } from "../components/cards/blog";
import { media } from "../components/io";
import { Master } from "../components/layout/master";
import { themes } from "../components/styles/ColorsStyle";
import { H3, Wrapper } from "../components/styles/TextStyles";

import imageService1 from "../assets/images/services/service-1.jpg";

export function Blog(props) {
  return (
    <Master {...props}>
      <Title>Todas las publicaciones</Title>
      <Grid>
        <CardBlog
          image={imageService1}
          date={'6 de Junio, 2021'}
          title={"¿Que es el tiempo medio de operacion? – TMO"}
          description={
            "TMO es el tiempo medio de operación, también conocido..."
          }
        />
      </Grid>
    </Master>
  );
}

const Grid = styled(Wrapper)`
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
