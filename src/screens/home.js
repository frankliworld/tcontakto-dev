import React from "react";
import styled from "styled-components";
import { CardService } from "../components/cards/service";
import { CardRecognitions } from "../components/cards/recognitions";
import { Icon, media } from "../components/io";
import { Master } from "../components/layout/master";
import { Section } from "../components/sections/section";
import WrappedHome from "../components/sections/WrappedHome";
import { Wrapper } from "../components/styles/TextStyles";
import { CardAllied } from "../components/cards/allied";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { CardValues } from "../components/cards/values";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

export function Home(props) {
  const CustomCardValues = (props) => (
    <SwiperSlide>
      <CardValues {...props} />
    </SwiperSlide>
  );

  const CustomSwiper = (props) => (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="io-swiper"
    >
      <div className="swiper-wrapper">{props.children}</div>
    </Swiper>
  );

  return (
    <Master {...props}>
      <WrappedHome />
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
      <Section
        title="Valores"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
      >
        <CustomSwiper>
          {data_services.map((i) => (
            <CustomCardValues key={i.id} icon={i.cover} />
          ))}
        </CustomSwiper>
      </Section>
      <Section
        title="Reconocimientos"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
      >
        <CustomSwiper>
          {data_recog.map((i) => (
            <SwiperSlide key={i.id}>
              <CardRecognitions title={i.title} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Section>
      <Section
        title="Aliados"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
      >
        <GridRecog>
          {data_services.map((i) => (
            <CardAllied key={i.id} icon={i.cover} />
          ))}
        </GridRecog>
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

const GridRecog = styled(Wrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  @media (${media.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
  @media (${media.movil}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
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

const data_recog = [
  {
    id: 1,
    image: "io-service1",
    title: "Mejor Fuerza de Ventas Telemarketing 2019",
  },
  { id: 2, image: "io-service1", title: "Mejor Canal de Ventas PLD 2017" },
  { id: 3, image: "io-service1", title: "Mejor Canal de Ventas TDC 2016" },
  {
    id: 1,
    image: "io-service1",
    title: "Premio a Mejor Canal de Ventas 2016  ",
  },
  { id: 1, image: "io-service1", title: "Mejor FUVEX 2T 2015 " },
  { id: 2, image: "io-service1", title: "Mejor Fuerza de Ventas TDC 2015" },
  {
    id: 3,
    image: "io-service1",
    title: "Mejor Canal Pago de Haberes 4to Trimestre 2015 ",
  },
  { id: 4, image: "io-service1", title: "Cobranzas Telefónicas" },
];
