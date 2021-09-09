import React, { useState, useEffect } from "react";
import api from "../../services/api";
// components
import { useSelector } from "react-redux";
import { Container } from "./styles";

// modules

function FavoriteBudget() {
  const [cards, setCards] = useState([]);

  const userId = useSelector((state) => state.user.profile.id);

  useEffect(() => {
    async function loadCards() {
      const response = await api.get(`favoritecards?id=${userId}`);

      if (response.data.empty === "empty") {
        setCards("empty");
      } else {
        setCards(response.data);
      }
    }

    loadCards();
  }, []);

  return <Container>{cards === "empty" ? <></> : <></>}</Container>;
}

export default FavoriteBudget;
