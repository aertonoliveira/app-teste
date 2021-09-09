import styled from "styled-components/native";
import colors from "../../utils/GlobalStyles/colors";

import { Platform, Dimensions } from "react-native";

import Button from "../../components/Buttons/Button";
import { H3 } from "../../components/Text";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {
  InputMaskBudget,
  InputMaskCPF,
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

export const ButtonSend = styled(Button)``;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const SwitchText = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.4);
`;

export const SwitchEnable = styled.Switch``;

export const BoxLoading = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerInf = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5px;
`;

export const BoxDescription = styled.View`
  flex-direction: row;
  height: auto;
  width: 100px;
`;

export const BoxAlignRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const BoxInf = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 2px;
  height: auto;
`;

export const ButtonInf = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  height: auto;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Box = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const ExtractInf = styled.Text`
  color: rgba(255, 255, 255, 0.4);

  font-family: ${Platform.OS === "android" ? "Arimo" : "Arial"};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;

  margin-left: 10px;
  width: 160px;
`;

export const ExtractDate = styled.Text`
  color: rgba(255, 255, 255, 0.4);

  font-family: ${Platform.OS === "android" ? "Arimo" : "Arial"};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
`;

export const Line = styled.View`
  width: 1px;
  background-color: rgba(255, 255, 255, 0.4);
  height: 50px;
  margin-top: 5px;
`;

export const ImageCoin = styled.Image`
  width: 20px;
  height: 20px;
`;

export const BoxAlignColumn = styled.View`
  flex-direction: column;
`;

export const ValueInf = styled.Text`
  font-family: ${Platform.OS === "android" ? "Arimo" : "Arial"};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #1bdd51;

  margin-top: 5px;
  margin-left: 10px;
`;

export const ValueInf2 = styled.Text`
  font-family: ${Platform.OS === "android" ? "Arimo" : "Arial"};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #ffff;

  margin-top: 5px;
  margin-left: 10px;
`;

export const ValueInf3 = styled.Text`
  font-family: ${Platform.OS === "android" ? "Arimo" : "Arial"};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #1ba6dd;

  margin-top: 5px;
  margin-left: 10px;
`;

export const BoxIcon = styled.View`
  flex-direction: column;
  align-items: center;
`;
