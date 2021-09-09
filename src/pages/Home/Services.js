import React, { memo } from "react";

// components

import Service from "./components/Service";
import NoServices from "./NoServices";

import { Container, ServicesList, ServiceHeaderContainer } from "./styles";

// modules

function Services({ loading, navigation, servicesList }) {
  if (loading) {
    return null;
  }

  if (servicesList.data === "empty") {
    return <NoServices />;
  }

  return (
    <Container>
      <ServiceHeaderContainer>
        Novas solicitações de serviços
      </ServiceHeaderContainer>
      <ServicesList
        data={servicesList}
        renderItem={({ item }) => (
          <Service navigation={navigation} data={item} />
        )}
        keyExtractor={(item) => String(item.id)}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Container>
  );
}

export default memo(Services);
// Desenvolvido por Hubert Ryan
