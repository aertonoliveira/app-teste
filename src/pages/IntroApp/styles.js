import styled from "styled-components/native";
import colors from "../../utils/GlobalStyles/colors";

// contents

import ServisaleLogoImg from "../../assets/other-icons/logo_secundary.png";
import ContentImageSource from "../../assets/intro/BG-Onboarding1.png";
import ContentImageSource2 from "../../assets/intro/BG-Onboarding2.png";
import ContentImageSource3 from "../../assets/intro/BG-Onboarding3.png";
import ContentImageSource4 from "../../assets/intro/BG-Onboarding4.png";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.Primary};
`;

export const TopContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContentImage1 = styled.ImageBackground.attrs({
  source: ContentImageSource,
})`
  flex: 1;
  padding: 40px;
`;

export const ContentImage2 = styled.ImageBackground.attrs({
  source: ContentImageSource2,
})`
  flex: 1;
  padding: 40px;
`;

export const ContentImage3 = styled.ImageBackground.attrs({
  source: ContentImageSource3,
})`
  flex: 1;
  padding: 40px;
`;

export const ContentImage4 = styled.ImageBackground.attrs({
  source: ContentImageSource4,
})`
  flex: 1;
  padding: 40px;
`;

export const TextInContent = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin: 40px 0px;
`;

export const BottomContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0px;
`;

export const AllButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const ButtonContainer = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.BackgroundRounded};
  text-align: center;
`;

export const ButtonOtherText = styled.Text`
  font-size: 16px;
  color: ${colors.BackgroundRounded};
`;

export const ButtonOtherBackText = styled.Text`
  font-size: 16px;
  color: #fff;
  opacity: 0.4;
  font-weight: bold;
`;

export const ServisaleLogo = styled.Image.attrs({
  source: ServisaleLogoImg,
})``;
