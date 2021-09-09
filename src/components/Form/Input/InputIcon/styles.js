import styled from "styled-components/native";
import colors from "../../../../utils/GlobalStyles/colors";

export const Container = styled.View`
  border-radius: 4px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.6)",
})`
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0.5px solid #fafafa;
  border-radius: 8px;
  padding: 18px 20px;
  color: ${colors.Secundary};
`;

export const TitleInput = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.Secundary};
  opacity: 0.4;
  margin: 10px 0px;
`;
