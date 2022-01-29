import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  background: #fff;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  margin-bottom: 100px;
`;
export const TextBox = styled.div`
  padding-bottom: 30px;
  h2 {
    margin: 0;
    padding-bottom: 15px;
    text-align: center;
  }
  h3 {
    text-align: center;
    font-size: 18px;
    margin: 0;
    padding-bottom: 10px;
  }
  input {
    width: 50%;
    margin-left: 25%;
  }
`;
export const BackButton = styled(Link)`
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  cursor: default;
  button {
    cursor: pointer;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
  }
`;
export const SendButton = styled.button`
  margin-top: 15px;
  width: 80%;
  margin-left: 10%;
  background: green;
  padding: 5px;
  border: none;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
`;
