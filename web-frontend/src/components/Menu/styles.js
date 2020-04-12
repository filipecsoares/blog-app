import styled from "styled-components";
import UtilConfig from "../../config/UtilConfig";

export const Container = styled.div`
  margin-top: 1rem;
  align-items: left;
  text-align: left;
`;

export const Content = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  background: white;
  border: 1px solid ${UtilConfig.primaryColor()};
  padding: 0.4rem 0.5rem 0.5rem;
  border-radius: 10px;
  color: ${UtilConfig.primaryColor()};
  width: 4.5rem;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #003d66;
    color: white;
    border: 1px solid #ffffff;
  }
`;
