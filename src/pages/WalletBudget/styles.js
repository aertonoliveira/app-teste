import styled from "styled-components/native";
import colors from "../../utils/GlobalStyles/colors";

import { Dimensions } from "react-native";

import Button from "../../components/Buttons/Button";
import { H3 } from "../../components/Text";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {
  InputMaskBudget,
  InputMaskCPF,
  InputMaskCard,
  InputMaskDate,
  InputMaskCVV,
} from "../../components/Form/Input/InputMask";
import InputIcon from "../../components/Form/Input/InputIcon";

const { width } = Dimensions.get("window");

export const ContainerPrice = styled.View`
  background-color: ${colors.Background};
  padding: 10px 20px;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.Background};
  padding: 10px 20px;
`;
export const Info = styled.View`
  margin-top: 10px;
  margin-bottom: 25px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const Balance = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: normal;
`;

export const BalanceBold = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
`;

export const BalanceSubTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.price};
`;

export const GetPriceContainer = styled.TouchableOpacity``;

export const GetPriceText = styled.Text`
  padding: 15px 40px;
  border-width: 1;
  border-color: ${colors.price};
  color: ${colors.price};
  border-radius: 10px;
`;

export const ModalBudgetContainer = styled.Modal.attrs({
  animationType: "slide",
})``;

export const ModalBudgetSubContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;
export const ModalBudgetSubContainerConfirmed = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const BudgetContainer = styled.View`
  background-color: ${colors.BackgroundAuthClient};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const BudgetTitle = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
`;

export const BudgetInput = styled(InputMaskBudget).attrs({
  placeholder: "0,00",
  placeholderTextColor: "#fff",
})`
  font-size: 22px;
  font-weight: bold;
  align-self: stretch;
  text-align: center;
`;

export const BudgetHold = styled.TouchableOpacity`
  height: 7px;
  width: 60px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const ModalBox = styled.View`
  align-self: stretch;
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 15px;
  margin: 0px 20px;
`;

export const TitleModalBox = styled(H3)`
  font-weight: bold;
  text-align: center;
  color: ${colors.Primary};
`;

export const SubTitleModalBox = styled.Text`
  margin: 20px 0px;
  font-size: 14px;
  color: ${colors.SecundaryLighter};
  text-align: center;
  padding: 0px 20px;
`;

export const ButtonModalBox = styled(Button)`
  margin-top: 10px;
`;

export const IconSuccess = styled(MaterialIcons).attrs({
  name: "check",
  size: 50,
  color: "#1BDD51",
})`
  align-self: center;
  margin: 30px 0px;
`;

export const FormInput = styled(InputIcon)`
  margin-bottom: 10px;
`;

export const FormInputOthers = styled(InputIcon)`
  margin-bottom: 10px;
  width: ${width / 2.3};
`;

export const FormRow = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const FormInputCPF = styled(InputMaskCPF)`
  margin-bottom: 10px;
`;

export const ButtonSend = styled(Button)`
  margin-bottom: 30px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 5px;
`;

export const SwitchText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.Primary};
`;

export const InputCard = styled(InputMaskCard)``;

export const SwitchEnable = styled.Switch``;

export const FormInputDate = styled(InputMaskDate)``;

export const FormInputCVV = styled(InputMaskCVV)``;

export const BoxPicker = styled.View`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const TitleText = styled.Text`
  margin-bottom: 15px;
  color: "rgba(0, 50, 90, 0.4)";
`;
