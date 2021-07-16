import React from "react";
import styled from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";
import Layout from "./layout";

export function Master(props) {
  // const { history } = props;

  function handleCloseAccount() {
    localStorage.removeItem("usr");
    // history.push("/");
  }

  return (
    <Layout>
      <Header {...props}/>
      <Content>{props.children}</Content>
      <Footer/>
    </Layout>
  );
}

const Content = styled.div`
`;