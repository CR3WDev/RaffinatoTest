import React from "react";
import { ConfigButton, Container, Modal, ResultBlock } from "./status.styled";
import ConfigIcon from "../../assets/edit-regular.svg";
import { useClimbs } from "../../context/climbs";
import { useWormPosition } from "../../context/worm-position";
export const Status = ({ data }) => {
  const { wormPosition } = useWormPosition();
  const { climbs } = useClimbs();
  const getColors = () => {
    const colors = ["white", "yellow", "green"];
    if (wormPosition >= data?.tamanho) {
      return colors[2];
    } else if (wormPosition >= data?.tamanho / 2) {
      return colors[1];
    } else {
      return colors[0];
    }
  };
  return (
    <Container>
      <Modal>
        <ConfigButton to="/config">
          <button>
            <img src={ConfigIcon} alt="configurações" />
          </button>
        </ConfigButton>
        <h2>Status</h2>
        <h3>A ultima minhoca subiu:{climbs}</h3>
        <ResultBlock color={getColors()}>
          <div />
        </ResultBlock>
      </Modal>
    </Container>
  );
};
