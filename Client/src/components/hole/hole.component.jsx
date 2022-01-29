import React from "react";
import { Worm } from "../worm";
import { Container } from "./hole.styled";

export const Hole = ({ data }) => {
  return (
    <Container holeSize={data?.tamanho}>
      <Worm data={data} />
    </Container>
  );
};
