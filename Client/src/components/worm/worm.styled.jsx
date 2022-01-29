import styled from "styled-components";

export const Shape = styled.div`
  position: relative;
  bottom: ${(props) => props.Yposition};
  width: 100px;
  height: 50px;
  background: #d9c5c5;
  cursor: pointer;
  transition: 0.5s;
`;
