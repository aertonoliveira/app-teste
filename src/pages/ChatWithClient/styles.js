import styled from "styled-components/native";
import colors from "../../utils/GlobalStyles/colors";
import Button from "../../components/Buttons/Button";
import { H3 } from "../../components/Text";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { InputMaskBudget } from "../../components/Form/Input/InputMask";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Primary};
  padding: 10px;
`;

export const ServiceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const ServiceProfile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

export const ServiceProfileContainer = styled.View``;

export const ServiceImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border-width: 2px;
  border-color: ${colors.Primary};
  position: absolute;
  right: -10px;
  bottom: -10px;
`;

export const ServiceOptions = styled.View`
  margin-left: 15px;
`;

export const ServiceTitle = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;

export const ServiceClientName = styled.Text`
  color: rgba(255, 255, 255, 0.4);
`;

export const ServiceTime = styled.Text`
  color: rgba(255, 255, 255, 0.4);
`;

export const ServiceTimeContainer = styled.View`
  align-items: center;
`;

export const ServiceTimeCountContainer = styled.View`
  background-color: ${colors.BackgroundRounded};
  width: 25px;
  height: 25px;
  border-radius: 17.5px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ServiceTimeCount = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const HeaderContainer = styled.View`
  margin-top: ${Platform.OS === "ios" ? 30 : 0};
`;

export const HeaderSubContainer = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

export const HeaderSeparator = styled.View`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  align-self: stretch;
  margin-top: 10px;
`;

export const IconBackContainer = styled.TouchableOpacity``;

export const IconBack = styled(MaterialIcons).attrs({
  name: "arrow-back",
  size: 30,
  color: "#fff",
})``;

export const InputMessage = styled.TextInput.attrs({
  placeholder: "Digite uma mensagem...",
  placeholderTextColor: "rgba(255, 255, 255, 0.4)",
})`
  padding: 13px 20px;
  font-size: 16px;
  color: #fff;
`;

export const ChatContainer = styled.FlatList`
  flex: 1;
  padding: 0px 24px;
`;

export const MessageMe = styled.Text`
  margin: 10px 0px;
  color: #fff;
  background-color: ${colors.BackgroundRounded};
  padding: 10px;
  border-radius: 20px;
  align-self: flex-end;
`;

export const MessageClient = styled.Text`
  margin: 10px 0px;
  color: #fff;
  background-color: ${colors.BackgroundAuthClient};
  padding: 10px;
  border-radius: 20px;
  align-self: flex-start;
`;

export const MessageNoMe = styled.Text`
  margin: 10px 0px;
  border-width: 1px;
  padding: 10px;
  border-radius: 20px;
  border-color: #fff;
  align-self: flex-start;
  color: #fff;
`;

export const SendBudgetContainer = styled.TouchableOpacity``;

export const SendBudgetText = styled.Text`
  border-width: 1px;
  border-color: #1bdd51;
  border-radius: 35px;
  padding: 13px 60px;
  align-self: center;
  color: #1bdd51;
  margin-top: 10px;
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
  border-radius: 16px;
  padding: 25px 25px;
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
  margin-top: 20px;
`;

export const IconSuccess = styled(MaterialIcons).attrs({
  name: "check",
  size: 50,
  color: "#1BDD51",
})`
  align-self: center;
  margin: 30px 0px;
`;

export const IconSucessContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-color: #1bdd51;
  border-width: 4px;
  align-self: center;
  margin: 30px 0px;
`;

export const BoxTextMsg = styled.View`
  flex-direction: row;
  justify-content: center;

  margin-bottom: 20px;
  margin-top: 20px;
`;

export const TextMsg = styled.Text`
  font-size: 18px;
  color: #fff;
`;
