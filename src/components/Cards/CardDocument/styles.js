import styled from "styled-components/native";

import Icon from "react-native-vector-icons/MaterialIcons";

import { H4 } from "../../Text";
import colors from "../../../utils/GlobalStyles/colors";

export const Container = styled.TouchableOpacity`
  background-color: ${colors.BackgroundCards};
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled(H4)`
  font-weight: bold;
`;

export const Description = styled(H4)``;

export const StatusView = styled.View`
  background-color: ${colors.SecundaryCards};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const Status = styled(Icon).attrs({
  size: 30,
})`
  margin: 10px;
  color: ${(props) => (props.approved ? "green" : "red")};
`;
