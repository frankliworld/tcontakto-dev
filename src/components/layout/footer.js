import React from "react";
import styled from "styled-components";
import { Form } from "../display/form";
import { Icon, media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { MediumText, TextSmall, Wrapper } from "../styles/TextStyles";

export function Footer(props) {
  return (
    <>
      {props.noForm ? "" : <Form />}
      <Wrapped>
        <Content>
          <Column>
            <Icon icon="io-logo" />
            <Title></Title>
            <Title>Redes Sociales</Title>
            <ListSocials>
              {data_social.map((i, x) => (
                <Social key={x} {...i} />
              ))}
            </ListSocials>
          </Column>
          <Column>
            <Title>Quick Links</Title>
            <Link>Inicio</Link>
            <Link>Servicios</Link>
            <Link>Contactos</Link>
            <Link>Trabaja con nosotros</Link>
          </Column>
          <Column>
            <Title>Company</Title>
            <Link>Terminos y condiciones</Link>
            <Link>Politica de privacidad</Link>
            <Link>politica de cookies</Link>
            <Link>Blog</Link>
          </Column>
          <Column>
            <Title>Contact us</Title>
            <Link>Info@tcontakto.com</Link>
            <Link>Av. Alfredo Benavides 2150, Miraflores</Link>
            <Link>(01) 709 4870</Link>
          </Column>
        </Content>
      </Wrapped>
    </>
  );
}

const Wrapped = styled.footer`
  background: white;

  padding-top: 40px;
  padding-bottom: 40px;
`;
const Content = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  @media (${media.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media (${media.movil}) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;
const Column = styled.div``;
const Title = styled(MediumText)`
  color: ${themes.light.gray};
  margin-bottom: 20px;
  font-weight: bold;
`;
const Link = styled(TextSmall)`
  color: ${themes.light.gray};
  margin: 0;
  padding: 5px 0;
  cursor: pointer;

  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  :hover {
    color: ${themes.light.primary};
    transform: translateY(-2px);
  }
`;

const ListSocials = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 40px);
  gap: 10px;
  position: fixed;
  z-index: 9;
  bottom: 30px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(40px);
  border-radius: 10px;
  padding: 4px 10px 4px 4px;
  @media (${media.tablet}) {
    position: relative;
    bottom: 0px;
    padding: 0px;
  }
`;

const Social = (props) => {
  function openUri(uri) {
    window.open(uri, "_blank");
  }

  return (
    <WrappedSocial onClick={() => openUri(props.url)} title={props.name}>
      <Icon {...props} />
    </WrappedSocial>
  );
};

const WrappedSocial = styled.div`
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const data_social = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/tcontaktosac",
    icon: "io-facebook",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tcontakto",
    icon: "io-instagram",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/tcontakto",
    icon: "io-linkedin",
  },
  {
    name: "Mail",
    url: "mailto:info@tcontakto.com",
    icon: "io-mail",
  },
];
