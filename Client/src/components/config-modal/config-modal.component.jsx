import React, { useState } from "react";
import {
  BackButton,
  Container,
  SendButton,
  TextBox,
} from "./config-modal.styled";
import ArrowLeft from "../../assets/arrow-left-solid.svg";
import axios from "axios";
import { useWormPosition } from "../../context/worm-position";

export const ConfigModal = () => {
  const [subida, setSubida] = useState(0);
  const [queda, setQueda] = useState(0);
  const [tamanho, setTamanho] = useState(0);
  const { setWormPosition } = useWormPosition();

  const sendData = () => {
    axios
      .post("http://localhost:3001/register", {
        tamanho: tamanho,
        subida: subida,
        queda: queda,
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <Container>
      <TextBox>
        <BackButton to="/">
          <button onClick={setWormPosition(0)}>
            <img src={ArrowLeft} alt="seta esquerda" />
          </button>
        </BackButton>
        <h2>Configurações</h2>
        <div>
          <h3>Qual o tamanho do buraco você deseja?</h3>
          <input
            type="number"
            id="buraco"
            name="buraco"
            onChange={(e) => setTamanho(e.target.value)}
          />
        </div>
        <div>
          <h3 htmlFor="sobe">Quanto você deseja que a minhoca suba?</h3>
          <input
            type="number"
            id="sobe"
            name="sobe"
            onChange={(e) => setSubida(e.target.value)}
          />
        </div>
        <div>
          <h3 htmlFor="desce">Quanto você deseja que a minhoca desça?</h3>
          <input
            type="number"
            id="queda"
            name="queda"
            onChange={(e) => setQueda(e.target.value)}
          />
        </div>
        <SendButton onClick={() => sendData()}>Alterar</SendButton>
      </TextBox>
    </Container>
  );
};
