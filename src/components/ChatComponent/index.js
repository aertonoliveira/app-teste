import React from "react";

// components

import {
  Container,
  ServiceContainer,
  ServiceProfile,
  ServiceProfileContainer,
  ServiceImage,
  ServiceOptions,
  ServiceTitle,
  ServiceClientName,
  ServiceTimeContainer,
  ServiceTimeCountContainer,
  ServiceTimeCount,
  ServiceTime,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

// modules
import { useSelector } from "react-redux";
import api from "./services/api";

function ChatComponent({ data, isFocused }) {
  const navigation = useNavigation();

  const userId = useSelector((store) => store.user.profile.id);

  async function markAsRead() {
    try {
      const response = await api.put(
        `markasread?id=${data.requests.id}&user=${userId}`
      );

      navigation.navigate("ChatWithClient", { data });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container onPress={markAsRead}>
      <ServiceContainer>
        <ServiceProfileContainer>
          <ServiceProfile source={{ uri: data.profile }} />
          <ServiceImage source={{ uri: data.service }} />
        </ServiceProfileContainer>
        <ServiceOptions>
          <ServiceTitle>{data.title}</ServiceTitle>
          <ServiceClientName>{data.clientName}</ServiceClientName>
        </ServiceOptions>
      </ServiceContainer>
    </Container>
  );
}

export default ChatComponent;
