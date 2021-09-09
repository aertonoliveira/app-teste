import React, { useEffect, useState } from "react";
import { Linking } from "react-native";

// components

import {
  Container,
  HeaderContainer,
  FaqBackIcon,
  FaqTitle,
  FaqListContainer,
  FaqComponentContainerIcon,
  FaqComponentSubIconContainer,
  FaqComponentTitleSuporte,
  FaqIcon,
  FaqSuporteIcon,
} from "./styles";

import WIcon from "../../assets/other-icons/bx_bxl-whatsapp.png";
import TIcon from "../../assets/other-icons/mi_call.png";
import EIcon from "../../assets/other-icons/eva_email-outline.png";

import api from "../../services/api";

// modules

function Suporte({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailSuporte, setEmailSuporte] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  async function loadData() {
    const response = await api.get("/help");

    // colocar os nomes iguais que estao no banco - name
    setPhoneNumber(response.data.helps[0].phone);
    setWhatsapp(response.data.helps[0].whatsapp);
    setEmailSuporte(response.data.helps[0].email);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <HeaderContainer onPress={() => navigation.goBack()}>
        <FaqBackIcon />
        <FaqTitle>Suporte</FaqTitle>
      </HeaderContainer>
      <FaqListContainer>
        <FaqComponentContainerIcon
          onPress={() =>
            Linking.openURL(`https://api.whatsapp.com/send?phone=${whatsapp}`)
          }
        >
          <FaqComponentSubIconContainer>
            <FaqSuporteIcon source={WIcon} />
            <FaqComponentTitleSuporte>WhatsApp</FaqComponentTitleSuporte>
          </FaqComponentSubIconContainer>
          <FaqIcon />
        </FaqComponentContainerIcon>
        <FaqComponentContainerIcon
          onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
        >
          <FaqComponentSubIconContainer>
            <FaqSuporteIcon source={TIcon} />
            <FaqComponentTitleSuporte>Telefone</FaqComponentTitleSuporte>
          </FaqComponentSubIconContainer>
          <FaqIcon />
        </FaqComponentContainerIcon>
        <FaqComponentContainerIcon
          onPress={() => Linking.openURL(`mailto:${emailSuporte}`)}
        >
          <FaqComponentSubIconContainer>
            <FaqSuporteIcon source={EIcon} />
            <FaqComponentTitleSuporte>E-mail</FaqComponentTitleSuporte>
          </FaqComponentSubIconContainer>
          <FaqIcon />
        </FaqComponentContainerIcon>
      </FaqListContainer>
    </Container>
  );
}

export default Suporte;
// Desenvolvido por Hubert Ryan
