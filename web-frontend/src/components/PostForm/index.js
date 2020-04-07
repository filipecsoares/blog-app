import React, { useState } from "react";

import { Container, Input } from "./styles";

export default function PostForm(props) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handlePost = async (event) => {
    event.preventDefault();
    await props.onCreatePost(title, text);
    setText("");
    setTitle("")
  };

  return (
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
  );
}
