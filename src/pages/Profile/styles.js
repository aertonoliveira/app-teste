import styled from "styled-components/native";

import { Dimensions } from "react-native";
import EvaCameraOutline from "../../assets/other-icons/eva_camera-outlineprofile.png";

const { width } = Dimensions.get("window");

import BackgroundDefault from "../../components/Background/BackgroundDefault";
import ButtonRounded from "../../components/Buttons/ButtonRounded";
import InputIcon from "../../components/Form/Input/InputIcon";
import colors from "../../utils/GlobalStyles/colors";

export const Container = styled.View``;

export const ContainerText = styled.View`
  background-color: ${colors.BackgroundProfile};
  width: 100%;
  height: 80%;
`;

export const LogoutButton = styled(ButtonRounded)`
  background-color: ${colors.LogoutButton};
`;

export const FormInput = styled(InputIcon)`
  margin-bottom: 10px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const ImageView = styled.View`
  padding: 25px 20px;
`;

export const IconEditImage = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background-color: ${colors.BackgroundRounded};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: ${width / 1.35};
`;

export const IconCamera = styled.Image.attrs({
  source: EvaCameraOutline,
})``;

export const TextBtn = styled.Text`
  color: ${colors.TextPrimary};
  font-size: 15px;
  font-weight: bold;
  margin: 5px;
`;
