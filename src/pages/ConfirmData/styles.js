import styled from "styled-components/native";
import colors from "../../utils/GlobalStyles/colors";
import InputIcon from "../../components/Form/Input/InputIcon";
import Button from "../../components/Buttons/Button";

import {
  InputMaskZip,
  InputMaskPrefix,
} from "../../components/Form/Input/InputMask";

export const Container = styled.View`
  background-color: ${colors.Background};
  padding: 10px 20px;
  height: 100%;
  flex: 1;
`;

export const BoxTitle = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const BoxForm = styled.View`
  margin-top: 20px;
`;

export const FormInput = styled(InputIcon)`
  margin-top: 5px;
`;

export const FormInputZipCode = styled(InputMaskZip)`
  margin-top: 5px;
`;

export const FormInputPrefix = styled(InputMaskPrefix)`
  margin-top: 5px;
`;

export const ButtonSubmit = styled(Button)`
  margin-top: 30px;
`;
