import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "../components/io";
import { Master } from "../components/layout/master";
import { themes } from "../components/styles/ColorsStyle";
import {
  H2,
  H3,
  MediumText,
  TextSmall,
  Wrapper,
} from "../components/styles/TextStyles";

export function DetailWork(props) {
  const [date, setDate] = useState("");

  useEffect(() => {
    const io = JSON.parse(localStorage.getItem("service"));
    setDate(io);
  }, []);

  return (
    <Master {...props} back>
      <Wrapped>
        <Column>
          <Title>{date.title}</Title>
          <Detail>{date.detail}</Detail>
        </Column>
        <Cover image={date.image} />
      </Wrapped>
      <Wrapper>
        <Info>
          Si estás interesado (a) en alguno de nuestros servicios, por favor
          déjanos tus datos y pronto nos comunicaremos contigo
        </Info>
      </Wrapper>
    </Master>
  );
}

const Wrapped = styled(Wrapper)`
  padding-top: 100px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  @media (${media.tablet}) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
const Column = styled.div``;
const Title = styled(H2)`
  color: ${themes.light.primary};
`;
const Info = styled(H3)`
  color: ${themes.light.primary};
  text-align: center;
  font-weight: normal;
  font-size: 24px;
`;
const Detail = styled(MediumText)`
  color: ${themes.light.gray};
`;

const Cover = (props) => (
  <WrappedImage>
    <Image src={props.image} />
  </WrappedImage>
);

const WrappedImage = styled.figure`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
