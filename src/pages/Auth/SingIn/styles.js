import styled from "styled-components/native";

import InputIcon from "../../../components/Form/Input/InputIcon";
import Button from "../../../components/Buttons/Button";

import colors from "../../../utils/GlobalStyles/colors";

export const Container = styled.ScrollView`
  background-color: ${colors.BackgroundAuthClient};
  flex: 1;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  padding: 0 30px;
`;

export const FormInput = styled(InputIcon)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
`;

export const ForgetPasswordButton = styled.TouchableWithoutFeedback``;

export const ForgetPasswordContainer = styled.View`
  align-self: flex-end;
  margin-top: 10px;
`;

export const ForgetPasswordText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.Secundary};
`;

export const RegisterContainer = styled.TouchableWithoutFeedback``;

export const RegisterText = styled.Text`
  margin: 20px 0px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.2);
  text-align: center;
`;

export const RegisterTextBold = styled.Text`
  color: ${colors.Secundary};
  font-weight: bold;
`;
