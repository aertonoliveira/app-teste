import styled from "styled-components/native";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import InputIcon from "../../../components/Form/Input/InputIcon";
import {
  InputMaskRG,
  InputMaskCPF,
  InputMaskPhone,
  InputMaskBirthday,
  InputMaskCNPJ,
} from "../../../components/Form/Input/InputMask";
import Button from "../../../components/Buttons/Button";
import DatePicker from "../../../components/Form/Picker/DatePicker";
import Checkbox from "../../../components/Form/Checkbox";
import { H4, H5 } from "../../../components/Text";
import colors from "../../../utils/GlobalStyles/colors";

export const Container = styled.ScrollView`
  background-color: ${colors.BackgroundAuthClient};
  flex: 1;
`;

export const Image = styled.Image`
  margin-top: 30px;
`;

export const TitleInput = styled.Text`
  font-size: 14px;
  font-weight: bold;
  opacity: 0.4;
  margin: 10px 0px;
  color: ${colors.Secundary};
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 250px;
  padding: 0px 30px;
`;

export const FormInput = styled(InputIcon)`
  margin-bottom: 10px;
`;

export const FormInputRG = styled(InputMaskRG)`
  margin-bottom: 10px;
`;

export const FormInputCPF = styled(InputMaskCPF)`
  margin-bottom: 10px;
`;
export const FormInputCNPJ = styled(InputMaskCNPJ)`
  margin-bottom: 10px;
`;

export const FormInputPhone = styled(InputMaskPhone)`
  margin-bottom: 10px;
`;

export const FormInputBirthday = styled(InputMaskBirthday)`
  margin-bottom: 10px;
`;

export const FormButtonDatePickerIcon = styled(Icon).attrs({
  name: "date-range",
  color: "rgba(255, 255, 255, 0.6)",
  size: 20,
})``;

export const FormButtonDatePickerText = styled(H5)`
  color: rgba(255, 255, 255, 0.6);
  margin-left: 15px;
`;

export const FormInputDatePicker = styled(DatePicker).attrs({
  textColor: "#fff",
})``;

export const FormInputUseTerms = styled(Checkbox)``;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const ContainerTerm = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px;
`;

export const TextTerm = styled(H5)`
  color: ${colors.TextPrimary};
  margin-left: 10px;
`;

export const TextTermLink = styled(TextTerm)`
  text-decoration: underline;
`;

export const SingLink = styled.TouchableOpacity`
  margin: 20px 0px;
`;

export const SingLinkText = styled(H4)`
  color: ${colors.TextPrimary};
  font-weight: bold;
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
