import React from "react";
import styled from "styled-components";
import { CardWork } from "../components/cards/work";
import { media } from "../components/io";
import { Master } from "../components/layout/master";
import { themes } from "../components/styles/ColorsStyle";
import { BodyMain, H2, H3, Wrapper } from "../components/styles/TextStyles";
import { FormWork } from "../components/display/formWork";

import imageService1 from "../assets/images/services/service-1.jpg";
import imageService2 from "../assets/images/services/service-2.jpeg";
import imageService3 from "../assets/images/services/service-3.jpeg";
import imageService4 from "../assets/images/services/service-4.jpeg";
import imageService5 from "../assets/images/services/service-5.jpeg";
import imageService6 from "../assets/images/services/service-6.jpeg";



export function Work(props) {
  return (
    <Master {...props} noForm>
      <Title>Ofertas de Trabajo</Title>
      <GridService>
        {data_services.map((i, x) => (
          <CardWork {...props} key={x} {...i} />
        ))}
      </GridService>
      <Description>
        ¿Quieres ser parte de la familia de TCONTAKTO? Postula a un puesto de tu
        interés y trabaja con nosotros.
      </Description>
      <FormWork/>
    </Master>
  );
}

const GridService = styled(Wrapper)`
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
`;
const data_services = [
  {
    id: 1,
    image: imageService1,
    title: "EJECUTIVO DE VENTAS - TARJETAS DE CRÉDITO",
    detail: "En TCONTAKTO tenemos personal calificado en los más altos estándares de atención. Nuestro servicio de atención al cliente consiste en la atención personalizada de llamadas e interacciones entrantes, el mismo que está orientado a aquellas empresas que deseen ofrecer una atención integral y a la medida para sus usuarios finales. Cuidamos a tu cliente y garantizamos la mejor atención a fin de mantenerlos fidelizados con tu marca.",
  },
  {
    id: 2,
    image: imageService2,
    title: "EJECUTIVO DE VENTAS - SEGUROS ONCOLOGICOS",
    detail: 'Entendemos que los procesos de ventas son vitales para su negocio y que estos requieren un método de trabajo, habilidades y destrezas especializadas para hacer efectivo cada contacto con sus clientes.\nEs por esto que ponemos a su disposición nuestra experiencia, conocimiento, tecnología y talento humano para ayudarlo a dinamizar sus relaciones comerciales.',
  },
  {
    id: 3,
    image: imageService3,
    title: "SUPERVISOR DE VENTAS - PRODUCTOS FINANCIEROS",
    detail: "Si bien cada día son más las personas que acceden y realizan pedidos por internet, no se debe descuidar a aquellos clientes que optan por un canal de pedidos más tradicional. Por ello, gracias a nuestro sistema de gestión y personal capacitado, podemos atender de forma oportuna y completa a quienes decidan realizar su pedido por vía telefónica. Manejamos de forma eficiente los tiempos de atención e ingreso de pedido en vivo para maximizar los niveles de satisfacción de cliente, incrementar ventas y reducir cola de espera en horas pico. Contamos con herramientas de gestión dinámica, central IVR y monitoreo constante de calidad para brindarle una solución a medida en pos de la mejor experiencia del cliente."
  },
  {
    id: 4,
    image: imageService4,
    title: "EJECUTIVO DE VENTAS - PRESTAMOS PERSONALES",
    detail: "Nuestra experiencia en negociación efectiva, así como la disponibilidad de múltiples canales y desarrollos tecnológicos específicos para la recuperación de la deuda, constituyen nuestras mejores herramientas para garantizar una gestión eficiente, con altos estándares de calidad, que supere las expectativas de nuestros clientes. Ofrecemos un servicio ligado a una metodología específica y única, que nos hace ser exclusivos en el mercado, con un proceso integral de gestión para la reclamación de impagados. Nuestras estrategias están dirigidas a alcanzar los objetivos de recuperación establecidos para cada cartera, preservando al mismo tiempo la confianza del cliente final y la imagen de la marca."
  },
  {
    id: 5,
    image: imageService5,
    title: "EJECUTIVO DE VENTAS - PAYRROLL",
    detail: "Es importante mantener un canal de atención para tus clientes – sean externos o internos. Nuestro servicio de mesa de ayuda puede proporcionar respuestas y soluciones a usuarios finales, clientes o beneficiarios, además de brindar asesoramiento en relación a la organización o institución, productos y servicios. Nuestra prioridad es dejar a tus usuarios satisfechos con las gestiones de nuestros analistas de mesa de ayuda, basados en un conocimiento profundo del knowhow de tus procesos o servicios."
  },
  {
    id: 6,
    image: imageService6,
    title: "EJECUTIVO DE VENTAS - ENTEL EMPRESAS",
    detail: "Cobranzas personalizadas, atención remota para dispositivos electrónicos o productos, soporte de posventa, agendamiento proactivo y predictivo de citas o lo que requieras. Si tú necesitas una solución a medida, nosotros lo diseñamos, revisamos los procesos, capacitamos a nuestros agentes y analistas y desplegamos nuestra solución integral velando por transmitir los valores de tu empresa y cuidando a tus clientes como nuestros: nuestra prioridad es la excelencia."
  },
];