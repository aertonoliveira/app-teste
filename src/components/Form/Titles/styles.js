import styled from "styled-components/native";
import colors from "../../../utils/GlobalStyles/colors";

export const Container = styled.View`
  margin: 150px 0px 0px 0px;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 80px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.Secundary};
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${colors.Secundary};
  text-align: center;
  opacity: 0.4;
  margin-top: 10px;
`;
