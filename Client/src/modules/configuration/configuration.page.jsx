import React from "react";
import { ConfigModal } from "../../components/config-modal";
import { Container } from "./configuration.styled";

export const ConfigurationPage = () => {
  return (
    <Container>
      <ConfigModal />
    </Container>
  );
};
