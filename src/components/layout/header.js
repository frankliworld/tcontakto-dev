import React, { useEffect } from "react";
import styled from "styled-components";
import { message, Tooltip } from "antd";
import { Button } from "../buttons/button";
import { Icon, media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { MediumText, TextSmall, Wrapper } from "../styles/TextStyles";

export function Header(props) {
  const { history } = props;

  useEffect(() => {
    console.log(props.location.pathname);
  }, []);

  function link(r) {
    window.location.href = r;
  }

  function navigation(x) {
    if (x) {
      history.push(x);
      scrollToTop()
    } else {
      message.info("En desarrollo");
    }
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function toContact() {
    let parent = document.getElementById("form-start");
    parent.scrollIntoView();
    parent.querySelector("input").focus()
  }

  return (
    <Wrapped>
      <Content>
        <WrappedTouch onClick={() => navigation("/")}>
          <Icon icon="io-logo" />
        </WrappedTouch>
        <ListNav>
          {data.map((i) => (
            <Touch
              key={i.id}
              name={i.name}
              status={props.location.pathname === i.route}
              route={i.route}
              onSelect={i.id === 3 ? toContact : navigation}
            />
          ))}
        </ListNav>
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
  <WrappedTouch onClick={() => props.onSelect(props.route)}>
    <Text {...props}>{props.name}</Text>
  </WrappedTouch>
);
const WrappedTouch = styled.div`
  cursor: pointer;
`;
const Text = styled(MediumText)`
  color: ${(props) =>
    props.status ? themes.light.primary : themes.light.gray};
  line-height: 1;
  margin: 0;
  padding: 10px 20px;
  font-weight: 600;
`;

const ListNav = styled.div`
  display: flex;
  align-items: center;
  @media (${media.tablet}) {
    display: none;
  }
`;

const data = [
  { id: 1, name: "Servicios", status: true, route: "/services" },
  { id: 2, name: "Clientes", status: false, route: "/clients" },
  { id: 3, name: "Contactanos", status: false, route: "/contact" },
  { id: 4, name: "Trabaja con nosotros", status: false, route: "/work" },
  { id: 5, name: "Blog", status: false, route: "/blog" },
];
