import React, { useState } from "react";
import { useClimbs } from "../../context/climbs";
import { useWormPosition } from "../../context/worm-position";
import { Shape } from "./worm.styled";

export const Worm = ({ data }) => {
  const { setClimbs } = useClimbs();
  const { wormPosition, setWormPosition } = useWormPosition();
  const [climbsCount, setClimbsCount] = useState(0);

  const handleWorm = () => {
    if (wormPosition >= data?.tamanho) return;
    const movimentY = data?.subida - data?.queda;
    setClimbsCount((prevState) => prevState + 1);
    wormMovimentY(movimentY);
    if (wormPosition >= data?.tamanho - (data?.subida - data?.queda)) {
      setClimbs(climbsCount + 1);
    }
  };
  const wormMovimentY = (value) => {
    setWormPosition((prevState) => prevState + value);
  };
  return <Shape onClick={handleWorm} Yposition={`${wormPosition}px`} />;
};
