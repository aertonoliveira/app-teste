import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Documents,
  Document,
  SubmitButton,
  CancelButton,
  Button,
  TitleText,
  TopContainer,
  ServisaleLogo,
} from "./styles";

import { useSelector } from "react-redux";

export default function SendDocuments() {
  const navigation = useNavigation();

  const data = useSelector((state) => state.user.profile);

  function handleNavigateDocuments() {
    navigation.navigate("SendDocumentsDescription", {
      document: "RG/CNH",
      data,
      option: "front",
    });
  }

  return (
    <Container>
      <TopContainer>
        <ServisaleLogo />
      </TopContainer>
      <Documents>
        <TitleText>
          Ops... parece que você ainda não enviou o seu documento, é necessário
          enviar o seu documento para ser aprovado!
        </TitleText>
        <Document
          name={"Enviar documento agora"}
          description="RG ou CNH"
          onPress={() => handleNavigateDocuments()}
        />
      </Documents>
    </Container>
  );
}
