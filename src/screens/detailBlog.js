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

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export function DetailBlog(props) {
  const [date, setDate] = useState("");

  useEffect(() => {
    const io = JSON.parse(localStorage.getItem("blog"));
    setDate(io);
  }, []);

  return (
    <Master {...props} noForm back>
      <Wrapped>
        <Cover image={date.image} />
        <Title>{date.title}</Title>
        {/* <Detail>{date.detail}</Detail> */}
        <Detail>{ReactHtmlParser(date.detail)}</Detail>
      </Wrapped>
      <Wrapper></Wrapper>
    </Master>
  );
}

const Wrapped = styled(Wrapper)`
  padding-top: 100px;
  padding-bottom: 100px;
  display: grid;
  gap: 80px;
  @media (${media.tablet}) {
    gap: 40px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
const Title = styled(H2)`
  color: ${themes.light.primary};
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
