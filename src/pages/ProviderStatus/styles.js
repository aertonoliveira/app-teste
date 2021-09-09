import styled from "styled-components/native";

import BackgroundDefault from "../../components/Background/BackgroundDefault";
import { H3 } from "../../components/Text";
import colors from "../../utils/GlobalStyles/colors";
import Button from "../../components/Buttons/Button";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const Container = styled(BackgroundDefault)``;
export const SubContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(H3)`
  color: ${colors.TitlePrimary};
  font-weight: bold;
  padding: 10px;
  margin-top: -50px;
`;

export const SubTitle = styled.Text`
  color: ${colors.TitlePrimary};
  opacity: 0.4;
  padding: 0px 40px;
  text-align: center;
  font-size: 14px;
`;

export const Loader = styled.ActivityIndicator.attrs({
  color: "#Fff",
  size: "large",
})``;

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.Modal.attrs({
  animationType: "fade",
  transparent: true,
})`
  flex: 1;
`;

export const InsideModalContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
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
