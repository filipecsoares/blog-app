import React from "react";

import { Container, Content } from "./styles";
import Menu from "../Menu";

export default function Layout({ children }) {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
}
