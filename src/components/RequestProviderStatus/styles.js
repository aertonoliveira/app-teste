import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

import { H2, H4 } from "./components/Text";
import ButtonRounded from "./components/Buttons/ButtonRounded";
import colors from "./utils/GlobalStyles/colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconStatus = styled(Icon).attrs({
  color: "#FFF",
  size: 60,
})`
  margin-bottom: ${height * 0.03}px;
`;

export const Title = styled(H2)`
  color: ${colors.TitlePrimary};
  font-weight: bold;
  margin-bottom: ${height * 0.01}px;
`;

export const Description = styled(H4)`
  color: ${colors.TextPrimary};
  text-align: center;
  margin: 0 ${width * 0.03}px;
  margin-bottom: ${height * 0.03}px;
`;

export const ButtonActivate = styled(ButtonRounded).attrs({
  color: "#00325a",
})`
  width: ${width * 0.8}px;
  background-color: ${colors.Secundary};
`;
