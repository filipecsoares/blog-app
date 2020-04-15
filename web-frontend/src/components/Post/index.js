import React from "react";

import { Container, LikeButton } from "./styles";

export default function Post(props) {
  const createdAt = props.createdAt
    .substring(0, 10)
    .split("-")
    .reverse()
    .join("-");
  return (
    <Container>
      <span>
        {props.username} - {createdAt}
      </span>

      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div>
        <span>{props.likes}</span>
        <LikeButton onClick={() => props.onLike(props.owner, props.postId)}>
          Like
        </LikeButton>
      </div>
    </Container>
  );
}
