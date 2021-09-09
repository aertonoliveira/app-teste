import React, { useState } from "react";

// components

import { Container, Form, SubmitButton, DocumentId } from "./styles";

import BackgroundAuth from "../../../components/BackgroundAuth";
import Titles from "../../../components/Form/Titles";

import DocumentIdSelfImg from "../../../assets/other-icons/selfie.png";

// Actions

function SendDocumentsFace({ navigation, route }) {
  const [loading, setLoading] = useState(false);

  const { data } = route.params;

  function goCaptureDocument() {
    navigation.navigate("DocumentFace", {
      document: "SELFIE",
      data,
      option: "selfie",
    });
  }

  return (
    <Container>
      <BackgroundAuth />
      <Form>
        <Titles
          title={
            "Por último precisamos que você tire uma Selfie segurando seu RG ou CNH!"
          }
          subTitle={
            "O ambiente precisa estar iluminado! Após essa ultima etapa, seu Cadastro irá para a análise. Não se preocupe, não divulgaremos essa foto."
          }
        />

        <DocumentId source={DocumentIdSelfImg} />

        <SubmitButton loading={loading} onPress={goCaptureDocument}>
          Tirar foto
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default SendDocumentsFace;
// Desenvolvido por Hubert Ryan
