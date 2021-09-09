import React, { useState, useEffect } from "react";

import api from "./services/api";

import CardHelp from "./components/Cards/CardHelp";

import { Container, ListHelp } from "./styles";

export default function HelpList() {
  const [help, SetHelp] = useState([]);

  useEffect(() => {
    async function loadHelpers() {
      const response = await api.get("help");

      SetHelp(response.data.helps);
    }

    loadHelpers();
  }, []);

  return (
    <Container>
      <ListHelp
        showsVerticalScrollIndicator={false}
        data={help}
        renderItem={({ item: { id, name, description } }) => (
          <CardHelp id={id} name={name} description={description} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
