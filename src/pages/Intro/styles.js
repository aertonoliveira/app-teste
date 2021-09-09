import styled from "styled-components/native";
import AppIntroSlider from "react-native-app-intro-slider";

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import { H3, H5 } from "./components/Text";
import colors from "./utils/GlobalStyles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Background};
`;

export const Slider = styled(AppIntroSlider)``;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 ${width * 0.1}px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Title = styled(H3)`
  color: ${colors.TitlePrimary};
  font-weight: bold;
  padding: ${height * 0.02}px 0;
`;

export const Description = styled(H5)`
  color: ${colors.TextPrimary};
`;

export const DoneButton = styled.Text`
  color: ${colors.TextPrimary};
  font-weight: bold;
`;
