import styled from "styled-components/native";

import colors from "../../utils/GlobalStyles/colors";
import InputIcon from "../../components/Form/Input/InputIcon";

import { InputMaskPhone } from "../../components/Form/Input/InputMask";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.Background};
  padding: 0px 20px;
`;

export const FormInput = styled(InputIcon)`
  margin-bottom: 10px;
`;

export const FormInputPhone = styled(InputMaskPhone)`
  margin-bottom: 10px;
`;

export const BoxButton = styled.View`
  margin-bottom: 15px;
`;
