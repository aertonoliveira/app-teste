import styled from "styled-components/native";
import { H3 } from "./components/Text/index";
import { H4 } from "./components/Text/index";
import colors from "./utils/GlobalStyles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.SecundaryLighter};
`;

export const ScrollView = styled.ScrollView``;

export const Texto = styled(H4)`
  text-align: justify;
  margin: 15px;
`;
export const Titulo = styled(H3)`
  font-weight: bold;
  margin: 15px;
  text-align: justify;
`;
