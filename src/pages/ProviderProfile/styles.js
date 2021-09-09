import styled from "styled-components/native";

import { H2, H3 } from "./components/Text";
import Button from "./components/Buttons/Button";
import colors from "./utils/GlobalStyles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.Background};
`;

export const ImageView = styled.View`
  align-items: center;
`;

export const InfoView = styled.View`
  margin: 10%;
`;

export const Name = styled.Text`
  color: ${colors.TextPrimary};
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export const Office = styled(H2)`
  color: ${colors.TextPrimary};
  font-style: italic;
  text-align: center;
`;

export const InfoText = styled(H3)`
  color: ${colors.TextPrimary};
  margin: 2px;
`;
export const BtnRequest = styled(Button)`
  width: 50%;
`;

export const BtnArea = styled.View`
  align-items: center;
`;
