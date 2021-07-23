import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { message, Tooltip } from "antd";
import { Button } from "../buttons/button";
import { Icon, media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { MediumText, TextSmall, Wrapper } from "../styles/TextStyles";

export function Header(props) {
  const { history } = props;
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();
  const tooltipRef = useRef();

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function navigation(x) {
    if (x) {
      switch (x) {
        case "/contact":
          toContact();
          break;
        case "/clients":
          toScrollSection("#clients-start");
          break;
        case "/services":
          toScrollSection("#services-start");
          break;

        default:
          history.push(x);
          scrollToTop();
          break;
      }
    } else {
      message.info("En desarrollo");
    }
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function toScrollSection(x) {
    try {
      history.push("/");
      let section = document.querySelector(x);
      section.scrollIntoView();
    } catch (e) {
      message.error(e);
    }
  }

  function toContact() {
    let parent = document.getElementById("form-start");
    parent.scrollIntoView();
    parent.querySelector("input").focus();
  }

  return (
    <Wrapped>
      <Content>
        <div onClick={() => navigation("/")}>
          <Icon icon="io-logo" />
        </div>
        <ListNav>
          {data.map((i, x) => (
            <Touch
              key={x}
              {...i}
              status={props.location.pathname === i.route}
              onSelect={navigation}
              // onSelect={i.id === 3 ? toContact : navigation}
            />
          ))}
        </ListNav>
        <Burgers ref={ref} onClick={handleMenu}>
          <Icon icon="io-hamburger" />
        </Burgers>
        <ListNavMobile ref={tooltipRef} isOpen={isOpen}>
          {data.map((i, x) => (
            <Touch
              key={x}
              {...i}
              status={props.location.pathname === i.route}
              onSelect={navigation}
            />
          ))}
        </ListNavMobile>
        {/* <Button title="Iniciar sesion"/> */}
      </Content>
    </Wrapped>
  );
}

const Wrapped = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(40px);
  ${themes.light.card}
`;
const Content = styled(Wrapper)`
  height: 60px;
  display: grid;
  grid-template-columns: 300px auto;
  gap: 20px;
  align-items: center;
  @media (${media.tablet}) {
    grid-template-columns: 1fr auto;
  }
`;

const Touch = (props) => (
  <WrappedTouch {...props} onClick={() => props.onSelect(props.route)}>
    <Icon {...props} />
    <Text {...props}>{props.name}</Text>
  </WrappedTouch>
);
const WrappedTouch = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  justify-items: center;
  margin-right: 30px;
  color: ${(props) =>
    props.status ? themes.light.primary : themes.light.gray};
  @media (${media.tablet}) {
    display: flex;
    height: 44px;
    background: rgba(255, 255, 255, 0.1);
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    align-self: center;
    margin-right: 0;
  }
`;
const Text = styled(MediumText)`
  color: ${(props) =>
    props.status ? themes.light.primary : themes.light.gray};
  line-height: 1;
  margin: 0;
  font-weight: 600;
`;
const Burgers = styled.div`
  display: none;
  @media (${media.tablet}) {
    display: grid;
    cursor: pointer;
    padding: 10px 0;
  }
`;

const ListNav = styled.div`
  display: flex;
  align-items: center;
  @media (${media.tablet}) {
    display: none;
  }
`;

const ListNavMobile = styled.div`
  padding: 20px 40px;
  position: absolute;
  right: 20px;
  top: 60px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  transform-origin: center top;
  transform: ${(props) =>
    props.isOpen
      ? "rotateX(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
`;

const data = [
  {
    id: 1,
    name: "Servicios",
    icon: "io-services",
    status: true,
    route: "/services",
  },
  {
    id: 2,
    name: "Clientes",
    icon: "io-clients",
    status: false,
    route: "/clients",
  },
  {
    id: 3,
    name: "Contactanos",
    icon: "io-contacts",
    status: false,
    route: "/contact",
  },
  {
    id: 4,
    name: "Trabaja con nosotros",
    icon: "io-work",
    status: false,
    route: "/work",
  },
  { id: 5, name: "Blog", icon: "io-blog", status: false, route: "/blog" },
];
