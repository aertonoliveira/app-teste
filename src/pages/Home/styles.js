import styled from "styled-components/native";
import { Dimensions } from "react-native";
import BackgroundDefault from "../../components/Background/BackgroundDefault";
import CardIcon from "../../components/Cards/CardIcon";
import List from "../../components/List";
import { H3 } from "../../components/Text";
import colors from "../../utils/GlobalStyles/colors";

import { LinearGradient } from "expo-linear-gradient";
import SeloPremiumIcon from "../../assets/other-icons/ilustração-banner.png";

const h2 = Dimensions.get("window").height / 4;

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.Primary};
  height: 100%;
`;
export const ContainerNoServices = styled(BackgroundDefault)`
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: ${h2 + "px"};
  background-color: ${colors.Primary};
`;

export const SearchView = styled.View`
  margin-top: 15px;
  flex-direction: row;
  background-color: ${colors.Secundary};
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const NameSearch = styled.TextInput`
  flex: 1;
  background-color: ${colors.Secundary};
  padding: 0 10px;
`;

export const BtnSearch = styled.TouchableOpacity`
  margin: 5px;
`;

export const CardContainer = styled.View`
  flex: 1;
`;

export const Title = styled(H3)`
  color: ${colors.TitlePrimary};
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  color: ${colors.Secundary};
  padding: 10px;
  opacity: 0.4;
`;

export const ListHorizontal = styled(List).attrs({ horizontal: true })``;

export const Categories = styled(CardIcon)`
  width: 130px;
  height: 120px;
  margin: 10px;
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

export const ServicesList = styled.FlatList`
  flex: 1;
`;

export const ServiceHeaderContainer = styled.Text`
  flex-direction: row;
  justify-content: center;
  height: 50px;
  color: #fff;
  font-size: 18px;
  margin-left: 10px;
  font-weight: bold;
`;

export const ProAdButton = styled.TouchableOpacity``;

export const ProAdContainer = styled(LinearGradient)`
  padding: 10px 20px;
  margin: 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProAdSubContainer = styled.View``;

export const ProAdTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ProAdSubTitle = styled.Text`
  color: #fff;
`;

export const ProAdIcon = styled.Image.attrs({
  source: SeloPremiumIcon,
})``;

export const ContainerIntro = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: flex-end;
  height: 100%;
  position: absolute;
`;

export const BoxHome = styled.View``;

export const BoxServices = styled.View``;

export const BoxWallet = styled.View``;

export const BoxChat = styled.View``;

export const BoxProfile = styled.View``;
