import styled from "styled-components";
import UtilConfig from "../../config/UtilConfig";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding: 1rem 2rem;
  color: #555;
  font-weight: 600;
  > span {
    color: #777;
    font-weight: 400;
    font-size: 13px;
  }
  > 
`;

export const LikeButton = styled.button`
  background: white;
  border: 1px solid ${UtilConfig.primaryColor()};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  color: ${UtilConfig.primaryColor()};
  font-weight: 600;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover {
    background: ${UtilConfig.primaryColor()};
    color: white;
  }
`;
