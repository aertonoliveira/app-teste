import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  position: absolute;
  width: 643px;
  height: 643px;
  left: -73px;
  top: -390px;
  border-radius: 320px;
  background-color: #ffffff;
  opacity: 0.1;
`;

export const OtherContainer = styled(LinearGradient)`
  position: absolute;
  width: 643px;
  height: 643px;
  left: -89px;
  top: -410px;
  border-radius: 320px;
`;

export const Logo = styled.Image`
  position: absolute;
  align-self: center;
  margin-top: 80px;
`;

export const TextLogo = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  align-self: center;
  margin-top: 140px;
`;
