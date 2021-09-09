import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
import BackgroundDefault from "../../components/Background/BackgroundDefault";

const h2 = Dimensions.get("window").height / 4;
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import List from "../../components/List";
import { H3 } from "../../components/Text";
import colors from "../../utils/GlobalStyles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Background};
`;

export const ListService = styled.FlatList`
  flex: 1;
  margin-top: 10px;
`;

export const Title = styled(H3)`
  color: ${colors.TitlePrimary};
`;

export const ListView = styled.View`
  background-color: #000;
  padding: 10px;
`;

export const ListBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${height * 0.03}px 0;
`;

export const ServiceContainer = styled.View`
  flex-direction: row;
  align-items: center;
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

export const ContainerService = styled.TouchableOpacity`
  align-self: stretch;
`;

export const SubContainerService = styled.TouchableOpacity`
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  align-self: stretch;
  margin-top: 10px;
`;

export const ServiceStartedContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${colors.BackgroundRounded};
  justify-content: center;
  align-items: center;
`;

export const ServiceStartedIcon = styled.Image``;

export const ContainerNoServices = styled(BackgroundDefault)`
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${h2 + "px"};
  background-color: ${colors.Background};
`;

export const TitleNo = styled(H3)`
  color: ${colors.TitlePrimary};
  font-weight: bold;
`;
