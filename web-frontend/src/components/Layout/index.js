import React from "react";

import { Container, Content } from "./styles";
import Menu from "../Menu";

export default function Layout(props) {
  return (
    <Container>
      {!props.loginPage && <Menu />}
      <Content>{props.children}</Content>
    </Container>
  );
}
