import React from "react";

// components

import {
  Container,
  OptionContainer,
  OptionIcon,
  OptionName,
  OptionSeparate,
  SignOutContainer,
  SignOutSubContainer,
  SignOutText,
} from "./styles";
import HeaderDrawer from "../../components/HeaderDrawer";

import AboutAppIcon from "../../assets/other-icons/about-app.png";
import SuportAppIcon from "../../assets/other-icons/suport.png";
import FqAppIcon from "../../assets/other-icons/faq.png";

// modules

import { useDispatch } from "react-redux";
import { signOut } from "../../store/modules/auth/actions";

function MenuDrawer({ navigation }) {
  const dispatch = useDispatch();

  function goSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <HeaderDrawer close={true} />
      <OptionContainer onPress={() => {}}>
        <OptionIcon source={AboutAppIcon} />
        <OptionName>Sobre o App</OptionName>
      </OptionContainer>
      <OptionSeparate />
      <OptionContainer onPress={() => navigation.navigate("Faq")}>
        <OptionIcon source={FqAppIcon} />
        <OptionName>Perguntas Frequentes</OptionName>
      </OptionContainer>
      <OptionSeparate />
      <OptionContainer onPress={() => navigation.navigate("Suporte")}>
        <OptionIcon source={SuportAppIcon} />
        <OptionName>Suporte</OptionName>
      </OptionContainer>

      <SignOutContainer>
        <SignOutSubContainer onPress={() => goSignOut()}>
          <OptionSeparate />
          <SignOutText>Sair</SignOutText>
        </SignOutSubContainer>
      </SignOutContainer>
    </Container>
  );
}

export default MenuDrawer;
// Desenvolvido por Hubert Ryan
