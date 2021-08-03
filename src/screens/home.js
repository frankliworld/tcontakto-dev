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

import imageService1 from "../assets/images/services/service-1.jpg";
import imageService2 from "../assets/images/services/service-2.jpeg";
import imageService3 from "../assets/images/services/service-3.jpeg";
import imageService4 from "../assets/images/services/service-4.jpeg";
import imageService5 from "../assets/images/services/service-5.jpeg";
import imageService6 from "../assets/images/services/service-6.jpeg";
import { HistoryHome } from "../components/sections/history";

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
      breakpoints={
        props.breakpoints || {
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
        }
      }
      className="io-swiper"
    >
      <div className="swiper-wrapper">{props.children}</div>
    </Swiper>
  );

  return (
    <Master {...props}>
      <WrappedHome />
      <Section
        id="services-start"
        title="Servicios"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
      >
        <GridService>
          {data_services.map((i, x) => (
            <CardService {...props} key={x} {...i} />
          ))}
        </GridService>
      </Section>
      <HistoryHome/>
      <Section
        title="Valores"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
      >
        <CustomSwiper>
          {data_values.map((i) => (
            <CustomCardValues key={i.id} icon={i.icon} title={i.title} description={i.description} color={i.color}/>
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
        id="clients-start"
        title="Aliados"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
      >
        <CustomSwiper
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 8,
              spaceBetween: 50,
            },
          }}
        >
          {data_allied.map((i) => (
            <SwiperSlide key={i.id}>
              <CardAllied title={i.name} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Section>
    </Master>
  );
}
const GridService = styled(Wrapper)`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  @media (${media.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  @media (${media.movil}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const data_services = [
  {
    id: 1,
    image: imageService1,
    title: "Atención al Cliente",
    detail: "En TCONTAKTO tenemos personal calificado en los más altos estándares de atención. Nuestro servicio de atención al cliente consiste en la atención personalizada de llamadas e interacciones entrantes, el mismo que está orientado a aquellas empresas que deseen ofrecer una atención integral y a la medida para sus usuarios finales. Cuidamos a tu cliente y garantizamos la mejor atención a fin de mantenerlos fidelizados con tu marca.",
  },
  {
    id: 2,
    image: imageService2,
    title: "Televentas y Marketing",
    detail: 'Entendemos que los procesos de ventas son vitales para su negocio y que estos requieren un método de trabajo, habilidades y destrezas especializadas para hacer efectivo cada contacto con sus clientes.\nEs por esto que ponemos a su disposición nuestra experiencia, conocimiento, tecnología y talento humano para ayudarlo a dinamizar sus relaciones comerciales.',
  },
  {
    id: 3,
    image: imageService3,
    title: "Toma de Pedidos",
    detail: "Si bien cada día son más las personas que acceden y realizan pedidos por internet, no se debe descuidar a aquellos clientes que optan por un canal de pedidos más tradicional. Por ello, gracias a nuestro sistema de gestión y personal capacitado, podemos atender de forma oportuna y completa a quienes decidan realizar su pedido por vía telefónica. Manejamos de forma eficiente los tiempos de atención e ingreso de pedido en vivo para maximizar los niveles de satisfacción de cliente, incrementar ventas y reducir cola de espera en horas pico. Contamos con herramientas de gestión dinámica, central IVR y monitoreo constante de calidad para brindarle una solución a medida en pos de la mejor experiencia del cliente."
  },
  {
    id: 4,
    image: imageService4,
    title: "Cobranzas Telefónicas",
    detail: "Nuestra experiencia en negociación efectiva, así como la disponibilidad de múltiples canales y desarrollos tecnológicos específicos para la recuperación de la deuda, constituyen nuestras mejores herramientas para garantizar una gestión eficiente, con altos estándares de calidad, que supere las expectativas de nuestros clientes. Ofrecemos un servicio ligado a una metodología específica y única, que nos hace ser exclusivos en el mercado, con un proceso integral de gestión para la reclamación de impagados. Nuestras estrategias están dirigidas a alcanzar los objetivos de recuperación establecidos para cada cartera, preservando al mismo tiempo la confianza del cliente final y la imagen de la marca."
  },
  {
    id: 5,
    image: imageService5,
    title: "Help Desk",
    detail: "Es importante mantener un canal de atención para tus clientes – sean externos o internos. Nuestro servicio de mesa de ayuda puede proporcionar respuestas y soluciones a usuarios finales, clientes o beneficiarios, además de brindar asesoramiento en relación a la organización o institución, productos y servicios. Nuestra prioridad es dejar a tus usuarios satisfechos con las gestiones de nuestros analistas de mesa de ayuda, basados en un conocimiento profundo del knowhow de tus procesos o servicios."
  },
  {
    id: 6,
    image: imageService6,
    title: "Servicios BPO",
    detail: "Cobranzas personalizadas, atención remota para dispositivos electrónicos o productos, soporte de posventa, agendamiento proactivo y predictivo de citas o lo que requieras. Si tú necesitas una solución a medida, nosotros lo diseñamos, revisamos los procesos, capacitamos a nuestros agentes y analistas y desplegamos nuestra solución integral velando por transmitir los valores de tu empresa y cuidando a tus clientes como nuestros: nuestra prioridad es la excelencia."
  },
];
const data_values = [
  { id: 1, icon: "io-values-1", title: "Integridad", description: "Vivimos como nadie nuestra labor", color: {a: "41c0c7", b: "009fc3"}},
  { id: 2, icon: "io-values-2", title: "Pasión", description: "Damos el máximo por conseguir los objetivos", color: {a: "ee3765", b: "d11f1f"}},
  { id: 3, icon: "io-values-3", title: "Compromiso", description: "Somos transparentes y generamos confianza", color: {a: "1b9038", b: "34c759"}},
  { id: 4, icon: "io-values-4", title: "Innovación", description: "Buscamos ser la novedad desde dentro hacia afuera", color: {a: "ee3765", b: "f3722e"}},
  { id: 5, icon: "io-values-5", title: "Flexibilidad", description: "Cambiamos y nos adaptamos para ser los mejores", color: {a: "f57c23", b: "fecc49"}},
  { id: 6, icon: "io-values-6", title: "Lealtad", description: "Sentimos la empresa como nuestra y respetamos las reglas que hay en ella", color: {a: "5859a9", b: "a56aae"}},
  { id: 7, icon: "io-values-7", title: "Dinamismo", description: "Resolvemos ágilmente los problemas tomando decisiones oportunas para beneficio de todos los involucrados", color: {a: "000", b: "8e8e93"}},
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
const data_allied = [
  { id: 1, logo: imageService1, name: "" },
  { id: 2, logo: imageService1, name: "" },
  { id: 3, logo: imageService1, name: "" },
  { id: 4, logo: imageService1, name: "" },
  { id: 5, logo: imageService1, name: "" },
  { id: 6, logo: imageService1, name: "" },
  { id: 7, logo: imageService1, name: "" },
  { id: 8, logo: imageService1, name: "" },
  { id: 9, logo: imageService1, name: "" },
  { id: 10, logo: imageService1, name: "" },
  { id: 11, logo: imageService1, name: "" },
  { id: 12, logo: imageService1, name: "" },
  { id: 13, logo: imageService1, name: "" },
  { id: 14, logo: imageService1, name: "" },
];
