import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

import BackgroundDefault from "../../../components/Background/BackgroundDefault";
import { H3 } from "../../../components/Text";
import colors from "../../../utils/GlobalStyles/colors";

export const Container = styled(BackgroundDefault)`
  position: absolute;
`;

export const Title = styled(H3)`
  color: ${colors.TitlePrimary};
  font-weight: bold;
  margin: ${height * 0.02}px 0;
`;

export const Description = styled(H3)`
  color: ${colors.TextPrimary};
`;
