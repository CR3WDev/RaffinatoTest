import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  h2 {
    text-align: center;
    padding-top: 10px;
    margin: 0;
  }
  h3 {
    text-align: center;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: 100px;
  }
`;
export const Modal = styled.div`
  background: #fff;
  width: 400px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
export const ConfigButton = styled(Link)`
  display: flex;
  justify-content: right;
  padding-top: 10px;
  margin-right: 10px;
  cursor: default;
  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
  }
`;
export const ResultBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  div {
    width: 90%;
    height: 120px;
    background: ${(props) => props.color};
  }
`;
