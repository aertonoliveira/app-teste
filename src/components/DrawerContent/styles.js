import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Avatar, Drawer } from "react-native-paper";
import { DrawerItem } from "@react-navigation/drawer";
import colors from "./utils/GlobalStyles/colors";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
`;

export const ContainerTop = styled.View`
  padding-top: ${width * 0.05}px;
  height: ${height * 0.58}px;
  background-color: ${colors.Background};

  border-bottom-right-radius: 20px;
`;

export const DrawerSection = styled(Drawer.Section)`
  margin-top: 5%;
`;

export const UserInfo = styled.View`
  padding-left: 20px;
`;

export const AvatarView = styled.View`
  flex-direction: row;
  margin-top: 4%;
`;
export const DetailUser = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-top: 3px;
  font-weight: bold;
  color: ${colors.TitlePrimary};
`;

export const Caption = styled.Text`
  font-size: 14px;
  line-height: 14px;
  color: ${colors.TextPrimary};
  margin-top: 5px;
`;

export const DrawerItems = styled(DrawerItem)``;

export const AvatarImage = styled(Avatar.Image)``;

export const AvatarBtn = styled.TouchableOpacity``;
