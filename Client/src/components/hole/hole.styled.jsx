import styled from "styled-components";

export const Container = styled.div`
  background: #a67360;
  width: 300px;
  height: ${(props) => `${props.holeSize}px`};
  display: flex;
  justify-content: center;
  align-items: end;
`;
