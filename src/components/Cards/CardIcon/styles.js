import styled from "styled-components/native";

import { H5 } from "../../Text";
import colors from "../../../utils/GlobalStyles/colors";

export const Container = styled.TouchableOpacity`
  background-color: ${colors.BackgroundCards};
  border-radius: 10px;
  width: 130px;
  height: 130px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const Text = styled(H5)`
  color: #00325a;
`;
