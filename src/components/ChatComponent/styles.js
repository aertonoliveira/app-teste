import styled from "styled-components/native";

import colors from "./utils/GlobalStyles/colors";

export const Container = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
