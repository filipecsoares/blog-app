import React from "react";

import { Content, Container } from "./styles";

export default function Menu() {
  return (
    <Container>
      <Content id="home">Home</Content>
      <Content id="newPost">Add Post</Content>
      <Content id="about">About</Content>
      <Content id="contact">Contact</Content>
    </Container>
  );
}
