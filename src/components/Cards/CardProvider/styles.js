import styled from "styled-components/native";

import { H2 } from "./components/Text";
import { H4 } from "./components/Text";

export const ViewProviver = styled.View`
  background-color: #fff;
  margin: 10px;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  elevation: 10;
`;

export const Name = styled(H2)`
  color: #000;
  text-align: left;
  margin-left: 25%;
`;
export const Office = styled(H4)`
  color: #000080;
  font-weight: bold;
  text-align: left;
  margin-left: 25%;
`;

export const StarText = styled(H4)`
  color: #696969;
  font-weight: bold;
`;

export const BtnProvider = styled.TouchableOpacity`
  height: 90px;
  padding-bottom: 20px;
  justify-content: center;
`;

export const ViewAvatar = styled.View`
  position: absolute;
`;

export const ViewStar = styled.View`
  position: absolute;
  right: 7px;
  padding-bottom: 10%;
  flex-direction: row;
`;
