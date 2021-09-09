import styled from "styled-components/native";
import colors from "../../utils/GlobalStyles/colors";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const Container = styled.View`
  flex: 1;
`;

export const BottomContainer = styled.View`
  align-self: stretch;
  background-color: #000;
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

export const OptionsServiceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const RejectServiceContainer = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  background-color: red;
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`;

export const RejectIcon = styled(MaterialIcons).attrs({
  name: "close",
  size: 25,
  color: "#fff",
})``;

export const AcceptServiceContainer = styled.TouchableOpacity`
  background-color: ${colors.BackgroundRounded};
  padding: 20px 45px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
`;

export const AcceptServiceText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const ServiceImageContainer = styled.View`
  flex: 1;
`;

export const ServieImage = styled.Image`
  flex: 1;
`;

export const IconAccept = styled(MaterialIcons).attrs({
  name: "check",
  size: 20,
  color: "#fff",
})`
  margin-left: 30px;
`;
