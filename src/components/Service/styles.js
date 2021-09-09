import styled from "styled-components/native";
import { Dimensions } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "./utils/GlobalStyles/colors";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  background-color: #fff;
  width: ${width / 1.4}px;
  height: ${height / 1.8}px;
  align-self: center;
  border-radius: 15px;
  margin: 0px 10px;
`;

export const ServiceImage = styled.Image`
  flex: 1;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const BottomContainer = styled.View`
  width: ${width / 1.4}px;
  height: ${height / 4}px;
  background-color: #000;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #fff;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.Primary};
  margin-top: 10px;
`;

export const UserServiceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #eee;
`;

export const ProfileUsername = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  color: ${colors.SecundaryLighter};
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Km = styled.Text`
  font-size: 16px;
  color: ${colors.SecundaryLighter};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${colors.SecundaryLighter};
`;

export const CheckoutService = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${colors.BackgroundRounded};
  position: absolute;
  bottom: -30px;
  right: -10px;
  justify-content: center;
  align-items: center;
`;

export const IconSuccess = styled(MaterialIcons).attrs({
  name: "check",
  size: 30,
  color: "#fff",
})``;
