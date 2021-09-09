import styled from "styled-components/native";
import TextInputMask from "react-native-text-input-mask";
import colors from "../../../../utils/GlobalStyles/colors";

export const InputMask = styled(TextInputMask).attrs({
  keyboardType: "numeric",
  autoCorrect: false,
  autoCapitalize: "none",
  placeholderTextColor: "rgba(255, 255, 255, 0.6)",
})`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0.5px solid #fafafa;
  border-radius: 8px;
  padding: 18px 20px;
  color: ${colors.Secundary};
`;
export const InputMask2 = styled(TextInputMask).attrs({
  keyboardType: "numeric",
  autoCorrect: false,
  autoCapitalize: "none",
  placeholderTextColor: "#fff",
})`
  font-size: 16px;
  padding: 18px 20px;
  color: #fff;
`;

export const TitleInput = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.Secundary};
  opacity: 0.4;
  margin: 10px 0px;
`;

export const InputMaskColumn = styled.View`
  flex-direction: column;
  width: 167px;
`;
