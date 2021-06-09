import React from "react";
import styled from "styled-components";
import { Footer } from "./footer";
import { Header } from "./header";
import Layout from "./layout";

export function Master(props) {
  return (
    <Layout>
      <Header/>
      <Content>{props.children}</Content>
      <Footer/>
    </Layout>
  );
}

const Content = styled.div`
`;