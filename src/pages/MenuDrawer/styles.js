import styled from "styled-components/native";
import colors from "../../utils/GlobalStyles/colors";

import EvaSearchIcon from "../../assets/other-icons/faq-serach.png";
import FaqComponentIcon from "../../assets/other-icons/dashicons_arrow-down-alt2.png";
import FaqComponentBackIcon from "../../assets/other-icons/ic_round-arrow-back.png";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Background};
`;

export const OptionContainer = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const OptionIcon = styled.Image``;

export const OptionName = styled.Text`
  margin-left: 16px;
  color: #fff;
`;

export const OptionSeparate = styled.View`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  align-self: stretch;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

export const SearchSubContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled.Image.attrs({
  source: EvaSearchIcon,
})``;

export const SearchItem = styled.TextInput.attrs({
  placeholder: "O que você está buscando?",
  placeholderTextColor: "rgba(255, 255, 255, 0.4);",
})`
  font-size: 16px;
  margin-left: 15px;
  color: #fff;
`;

export const CancelButtonContainer = styled.TouchableOpacity``;

export const CancelButtonText = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
`;

export const FaqListContainer = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
`;

export const FaqComponentContainer = styled.TouchableOpacity`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const FaqComponentContainerIcon = styled.TouchableOpacity`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 22px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const FaqComponentSubContainer = styled.View``;
export const FaqComponentSubIconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FaqIcon = styled.Image.attrs({
  source: FaqComponentIcon,
})`
  transform: rotate(-90deg);
`;

export const FaqComponentTitle = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;
export const FaqComponentTitleSuporte = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  margin-left: 15px;
`;

export const FaqComponentSubTitle = styled.Text`
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.4);
`;

export const HeaderContainer = styled.TouchableOpacity`
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const FaqBackIcon = styled.Image.attrs({
  source: FaqComponentBackIcon,
})``;

export const FaqTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-left: 15px;
`;

export const FaqTextContainer = styled.ScrollView`
  padding: 0px 20px;
`;

export const FaqText = styled.Text`
  font-size: 16px;
  text-align: justify;
  color: rgba(255, 255, 255, 0.4);
`;

export const FaqSuporteIcon = styled.Image``;

export const SignOutContainer = styled.View`
  padding: 20px;
  justify-content: flex-end;
  flex: 1;
`;

export const SignOutSubContainer = styled.TouchableOpacity``;

export const SignOutText = styled.Text`
  color: #fff;
  padding-top: 20px;
`;
