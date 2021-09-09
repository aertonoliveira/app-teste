import styled from "styled-components/native";

import { Dimensions, Platform } from "react-native";

import BackgroundAuth from "../../components/BackgroundAuth";
import CardIcon from "../../components/Cards/CardIcon";
import List from "../../components/List";
import { H3 } from "../../components/Text";
import colors from "../../utils/GlobalStyles/colors";

import { LinearGradient } from "expo-linear-gradient";
import SeloPremiumIcon from "../../assets/other-icons/ilustração-banner.png";

import SearchIcon from "../../assets/other-icons/eva_search-fill.png";
import FaqComponentIcon from "../../assets/other-icons/dashicons_arrow-down-alt2.png";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Primary};
`;
export const ContainerNoServices = styled(BackgroundAuth)`
  align-items: center;
  justify-content: center;
  margin-top: 300px;
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

export const TitleContainer = styled.View`
  margin-top: 25px;
  flex-direction: row;
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: rgba(255, 255, 255, 0.4);
  font-size: 18px;
  font-family: ${Platform.OS === "android" ? "Arimo" : "Arial"};
`;

export const InputContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 20px;
  border-radius: 10px;
  margin: 30px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputItem = styled.TextInput.attrs({
  placeholder: "Pesquisar",
  placeholderTextColor: "rgba(255, 255, 255, 0.4)",
})`
  font-size: 16px;
  max-width: ${width / 1.5}px;
  width: 100%;
  color: #fff;
`;

export const InputIconContainer = styled.TouchableOpacity`
  color: rgba(255, 255, 255, 0.4);
`;

export const InputIcon = styled.Image.attrs({
  source: SearchIcon,
})``;

export const CategoryContainer = styled.ScrollView.attrs({})`
  flex: 1;
  padding: 0px 20px;
  margin-bottom: 32px;
`;

export const CategoryGroupContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const CategoryItemContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${width / 2.3}px;
  height: ${height / 6}px;
  border: 1px solid rgba(0, 50, 90, 0.1);
  border-radius: 8px;
`;

export const CategoryItemTitle = styled.Text`
  margin-top: 10px;
  color: #fff;
`;

export const CategoryItemIcon = styled.Image`
  border-radius: 5px;
  background-color: #fff;
  width: 120px;
  height: 100px;
`;

export const ServiceListContainer = styled.FlatList`
  padding: 0px 20px;
`;

export const ServiceSearchItemContainer = styled.TouchableOpacity`
  border: 1px solid rgba(0, 50, 90, 0.4);
  border-radius: 8px;
  padding: 22px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ServiceSearchSubContainer = styled.View``;

export const ServiceSearchTitle = styled.Text`
  font-size: 16px;
  color: ${colors.Primary};
  font-weight: bold;
`;

export const ServiceSearchCategory = styled.Text`
  font-size: 14px;
  color: ${colors.SecundaryLighter};
`;

export const ServiceSearchIcon = styled.Image.attrs({
  source: FaqComponentIcon,
})`
  transform: rotate(-90deg);
`;

export const Category = styled.TouchableOpacity`
  width: 100%;
  height: 19px;
  padding: 0 5px;

  margin-top: 16px;
`;

export const CategoryTitle = styled.Text`
  font-family: ${Platform.OS === "android" ? "Arimo" : "Arial"};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;

  color: #ffffff;
`;

export const Line = styled.View`
  margin-top: 16px;
  width: 100%;
  height: 1px;

  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ModalBudgetContainer = styled.Modal.attrs({
  animationType: "slide",
})``;
