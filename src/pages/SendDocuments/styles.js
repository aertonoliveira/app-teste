import styled from "styled-components/native";

import BackgroundDefault from "../../components/Background/BackgroundDefault";

import ServisaleLogoImg from "../../assets/other-icons/logo_secundary.png";
import CardDocument from "../../components/Cards/CardDocument";
import ButtonRounded from "../../components/Buttons/ButtonRounded";

export const Container = styled(BackgroundDefault)`
  padding: 20px;
`;

export const TitleText = styled.Text`
  color: #fff;
  font-size: 18px;

  margin-top: 20px;
  margin-bottom: 20px;

  text-align: center;
`;

export const TopContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ServisaleLogo = styled.Image.attrs({
  source: ServisaleLogoImg,
})``;

export const Documents = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Document = styled(CardDocument)`
  margin: 20px;
`;

export const Button = styled.View``;

export const SubmitButton = styled(ButtonRounded).attrs({
  color: "#00325a",
})`
  background-color: green;
  margin: 10px 0;
`;

export const CancelButton = styled(SubmitButton)`
  background-color: red;
`;
