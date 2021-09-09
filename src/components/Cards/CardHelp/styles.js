import styled from "styled-components/native";

import { H2 } from "./components/Text";
import colors from "./utils/GlobalStyles/colors";

export const ViewHelp = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${colors.Secundary};
`;

export const Name = styled(H2)`
  color: ${colors.Secundary};
`;

export const BtnHelp = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const ViewIcon = styled.View``;
