import React, { useState } from "react";

import { Container, List } from "./styles";

import CardRequest from "./components/Cards/CardRequest";

export default function Requests() {
  const [Request, setRequest] = useState([
    {
      key: 1,
      name: "Ruanderson Vieira",
      service: "Desenvolvedor de sistemas",
      date: "20/01/2020",
      status: "aberto",
      value: "1.200,00",
    },
    {
      key: 2,
      name: "Ruanderson Vieira",
      service: "Desenvolvedor de sistemas",
      date: "20/02/2020",
      status: "fechado",
      value: "1.200,00",
    },
  ]);

  return (
    <Container>
      <List
        showsVerticalScrollIndicator={false}
        data={Request}
        keyExtrator={(item) => item.key}
        renderItem={({ item }) => <CardRequest data={item} />}
      />
    </Container>
  );
}
