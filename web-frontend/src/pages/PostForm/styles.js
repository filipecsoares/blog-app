import styled from "styled-components";
import UtilConfig from "../../config/UtilConfig";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #cccccc;
  background: white;
  max-width: 640px;
  width: 100%;
  box-sizing: border-box;
  > textarea {
    resize: none;
    margin-bottom: 1rem;
    border: 1px solid ${UtilConfig.primaryColor()};
    border-radius: 10px;
    padding: 0.6rem;
  }
  > div {
    display: flex;
    justify-content: flex-end;
    > button {
      background: white;
      border: 1px solid ${UtilConfig.primaryColor()};
      padding: 0.4rem 1rem;
      border-radius: 20px;
      color: ${UtilConfig.primaryColor()};
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background: ${UtilConfig.primaryColor()};
        color: white;
      }
    }
  }
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  border: 1px solid ${UtilConfig.primaryColor()};
  border-radius: 10px;
  padding: 0.6rem;
`;
