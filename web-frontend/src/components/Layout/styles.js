import styled from "styled-components";
import UtilConfig from "../../config/UtilConfig";

export const Container = styled.div`
  background: ${UtilConfig.primaryColor()};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 960px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;