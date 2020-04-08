import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Content, Container } from "./styles";

export default function Menu() {
  return (
    <Container>
      <Content id="home">
        <Link to="/home">Home</Link>
      </Content>
      <Content id="newPost">
        <Link to="/newPost">Add Post</Link>
      </Content>
      <Content id="about">
        <Link to="/about">About</Link>
      </Content>
      <Content id="contact">
        <Link to="/contact">Contact</Link>
      </Content>
    </Container>
  );
}
