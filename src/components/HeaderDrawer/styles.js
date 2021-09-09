import styled from "styled-components/native";
import { Platform } from "react-native";
import LogoImage from "../../assets/other-icons/logo-app-prestadorinvert.png";
import LogoMenu from "../../assets/other-icons/heroicons-solid_menu-alt-1.png";
import LogoClose from "../../assets/other-icons/eva_close-fill.png";

export const Container = styled.View`
  align-self: stretch;
  height: 30px;
  margin-top: ${Platform.OS === "ios" ? 60 : 30};
  z-index: 1;
`;
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  align-self: stretch;
  height: 20px;
  padding: 0px 17px;
`;

export const BtnMenu = styled.TouchableWithoutFeedback`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
`;

export const Logo = styled.Image.attrs({
  source: LogoImage,
})``;

export const Separator = styled.View`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  align-self: stretch;
  margin-top: 10px;
`;

export const IconClose = styled.Image.attrs({
  source: LogoClose,
})`
  width: 20px;
  height: 20px;
`;

export const IconMenu = styled.Image.attrs({
  source: LogoMenu,
})`
  width: 30px;
  height: 30px;
`;
