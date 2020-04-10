import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";

import { Container, Input } from "./styles";

export default function PostForm(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handlePost = async (event) => {
    event.preventDefault();
    await onCreatePost(title, text);
    setText("");
    setTitle("");
    props.history.push('/home');
  };

  const onCreatePost = async (title, content) => {
    try {
      const token = localStorage.getItem("SESSION_TOKEN");
      await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/posts`,
        {
          title,
          content,
        },
        {
          headers: { "auth-token": token },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Container>
        <Input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write here..."
          rows={5}
        />
        <div>
          <button onClick={handlePost}>Enviar</button>
        </div>
      </Container>
    </Layout>
  );
}
