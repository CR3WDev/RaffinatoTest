import axios from "axios";
import React, { useEffect, useState } from "react";
import { Hole } from "../../components/hole/hole.component";
import { Status } from "../../components/status/status.component";
import { Container } from "./home.styled";

export const HomePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/getData").then((response) => {
      const data = response.data[0];
      setData(data);
    });
  }, []);
  return (
    <Container>
      <Status data={data} />
      <Hole data={data} />
    </Container>
  );
};
