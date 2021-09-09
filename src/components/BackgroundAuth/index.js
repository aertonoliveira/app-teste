import React from "react";

// components

import { Container, OtherContainer, Logo, TextLogo } from "./styles";

// modules

import LogoImage from "../../assets/other-icons/logo_secundary.png";

function BackgroundAuth({ text }) {
  return (
    <>
      <Container />
      <OtherContainer
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
        colors={["#2E75AE", "#00325A"]}
      />
      <Logo source={LogoImage} text={text} />
      {text && <TextLogo>{text}</TextLogo>}
    </>
  );
}

export default BackgroundAuth;
// Desenvolvido por Hubert Ryan
