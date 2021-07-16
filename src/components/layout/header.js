import React, {useEffect} from "react";
import styled from "styled-components";
import { message, Tooltip } from "antd";
import { Button } from "../buttons/button";
import { Icon, media } from "../io";
import { themes } from "../styles/ColorsStyle";
import { MediumText, TextSmall, Wrapper } from "../styles/TextStyles";

export function Header(props) {
  const { history } = props;

  useEffect(() => {
    console.log(props.location.pathname)
  }, []);

  function link(r) {
    window.location.href = r;
  }

  function navigation(x) {
    if (x) {
      history.push(x);
    } else {
      // message.info("En desarrollo");
    }
  }

  return (
    <Wrapped>
      <Icon icon="io-logo" />
      <ListNav>
        {data.map((i) => (
          <Touch
            key={i.id}
            name={i.name}
            status={props.location.pathname === i.route}
            route={i.route}
            onSelect={i.key === 20 ? props.closeSesion : navigation}
          />
        ))}
      </ListNav>
      {/* <Button title="Iniciar sesion"/> */}
    </Wrapped>
  );
}

const Wrapped = styled(Wrapper)`
  z-index: 1;
  display: grid;
  grid-template-columns: 300px auto;
  gap: 20px;
  align-items: center;
  height: 60px;
  ${themes.light.card}
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
  /* background: ${themes.light.primary}; */
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
  { id: 2, name: "Clientes", status: false, route: "clients" },
  { id: 3, name: "Contactanos", status: false, route: "contact" },
  { id: 4, name: "Trabaja con nosotros", status: false, route: "work" },
  { id: 5, name: "Blog", status: false, route: "blog" },
];
