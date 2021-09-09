import styled from "styled-components/native";
import colors from "../../../utils/GlobalStyles/colors";

import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  height: 60px;
  background: #1ba6dd;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.TextButton};
  font-weight: bold;
  font-size: 16px;
`;
