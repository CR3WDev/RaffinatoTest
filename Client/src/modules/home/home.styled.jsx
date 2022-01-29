import styled from "styled-components";
export const Container = styled.div`
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  background: #04adbf;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
