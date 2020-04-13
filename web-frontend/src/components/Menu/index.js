import React from "react";
import { Link } from "react-router-dom";

import { Content, Container } from "./styles";

export default function Menu() {
  const logout = () => {
    localStorage.removeItem("SESSION_TOKEN");
    localStorage.removeItem("jwt");
  }
  return (
    <Container>
      <Content id="home">
        <Link to="/home" className="text-link">
          Home
        </Link>
      </Content>
      <Content id="newPost">
        <Link to="/newPost" className="text-link">
          Add Post
        </Link>
      </Content>
      <Content id="about">
        <Link to="/about" className="text-link">
          About
        </Link>
      </Content>
      <Content id="contact">
        <Link to="/contact" className="text-link">
          Contact
        </Link>
      </Content>
      <Content id="logout">
        <Link to="/" onClick={logout} className="text-link">
          Logout
        </Link>
      </Content>
    </Container>
  );
}
