import React, { useState, useEffect } from "react";

import api from "./services/api";

import { Container, Title, ListCategories, CardCategory } from "./styles";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("categories");
      setCategories(response.data.categories);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <Title>Escolha o serviço</Title>
      <ListCategories
        numColumns={2}
        data={categories}
        renderItem={({ item }) => <CardCategory dataItem={item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
