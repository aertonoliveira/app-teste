import React, { useState } from "react";

// components

import { Container, Form, SubmitButton, DocumentId } from "./styles";

import BackgroundAuth from "../../../components/BackgroundAuth";
import Titles from "../../../components/Form/Titles";

import DocumentIdReverseImg from "../../../assets/other-icons/id-verse.png";

// Actions

function SendDocumentsReverse({ navigation, route }) {
  const [loading, setLoading] = useState(false);

  const { data } = route.params;

  function goCaptureDocument() {
    navigation.navigate("DocumentReverse", {
      document: "RG",
      data,
      option: "verse",
    });
  }

  return (
    <Container>
      <BackgroundAuth />
      <Form>
        <Titles
          title={
            "Agora precisamos de uma foto do Verso do seu RG ou CNH em um lugar iluminado"
          }
          subTitle={
            "Enviando os documentos de acordo com o que se pede levaremos até 48 horas para aprovar o seu perfil."
          }
        />

        <DocumentId source={DocumentIdReverseImg} />

        <SubmitButton loading={loading} onPress={goCaptureDocument}>
          Tirar foto
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default SendDocumentsReverse;
// Desenvolvido por Hubert Ryan
