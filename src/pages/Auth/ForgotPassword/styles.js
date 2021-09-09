import styled from "styled-components/native";

import InputIcon from "../../../components/Form/Input/InputIcon";
import Button from "../../../components/Buttons/Button";
import { InputMaskCPF } from "../../../components/Form/Input/InputMask";

import colors from "../../..//utils/GlobalStyles/colors";

export const Container = styled.ScrollView`
  background-color: ${colors.BackgroundAuthClient};
  flex: 1;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  padding: 0 30px;
  z-index: -1;
`;

export const FormInput = styled(InputIcon)`
  margin-bottom: 10px;
`;

export const FormInputCPF = styled(InputMaskCPF)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
