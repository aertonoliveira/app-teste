import React, { useState } from "react";

// components

import { Container, Form, SubmitButton, DocumentId } from "./styles";

import BackgroundAuth from "../../../components/BackgroundAuth";
import Titles from "../../../components/Form/Titles";

import DocumentIdImg from "../../../assets/other-icons/id.png";

// Actions

function SendDocuments({ navigation, route }) {
  const [loading, setLoading] = useState(false);

  const { data } = route.params;

  function goCaptureDocument() {
    navigation.navigate("Document", { document: "RG", data, option: "front" });
  }

  return (
    <Container>
      <BackgroundAuth />
      <Form>
        <Titles
          title={`${data.first_name}, é importante completar todas as etapas de envio de documentos como pedido!`}
          subTitle={
            "Tire uma foto visível da Frente de seu RG ou CNH em um lugar iluminado. (Caso não envie os documentos seu cadastro não será aprovado!)"
          }
        />

        <DocumentId source={DocumentIdImg} />

        <SubmitButton loading={loading} onPress={goCaptureDocument}>
          Tirar foto
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default SendDocuments;
// Desenvolvido por Hubert Ryan
