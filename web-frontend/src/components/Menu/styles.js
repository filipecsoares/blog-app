import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  align-items: left;
  text-align: left;
`;

export const Content = styled.div`
  display: inline-block;
  background: white;
  border: 1px solid #1da1f2;
  padding: 0.4rem 0.5rem 0.5rem;
  border-radius: 10px;
  color: #1da1f2;
  width: 4.2rem;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #1da1f2;
    color: white;
  }
`;
