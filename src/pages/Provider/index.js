import React from "react";

import { Container, ListProvider } from "./styles";

import CardProvider from "./components/Cards/CardProvider";

export default function Provider() {
  const providers = [
    {
      id: 1,
      avatar: "account-circle",
      name: "Fulano",
      office: "Developer",
    },
    {
      id: 2,
      avatar: "account-circle",
      name: "Fulano 2",
      office: "Developer",
    },
    {
      id: 3,
      avatar: "account-circle",
      name: "Fulano 3",
      office: "Developer",
    },
    {
      id: 4,
      avatar: "account-circle",
      name: "Fulano 4",
      office: "Developer",
    },
    {
      id: 5,
      avatar: "account-circle",
      name: "Fulano 5",
      office: "Developer",
    },
    {
      id: 6,
      avatar: "account-circle",
      name: "Fulano 6",
      office: "Developer",
    },
  ];

  return (
    <Container>
      <ListProvider
        showsVerticalScrollIndicator={false}
        data={providers}
        renderItem={({ item }) => (
          <CardProvider
            avatar={item.avatar}
            name={item.name}
            office={item.office}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
