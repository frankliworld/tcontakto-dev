import styled from "styled-components";
import { media } from "../io";

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 60px;
`;

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 40px;
`;

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 30px;
`;

export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;

export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`;

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
`;

export const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`;

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const TextSmall = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`;

export const TextSmall2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`;

export const Wrapper = styled.section`
  max-width: 1234px;
  padding: 0 30px;
  margin: 0 auto;
  position: relative;
  @media (${media.tablet}) {
    padding: 0 20px;
  }
`;
