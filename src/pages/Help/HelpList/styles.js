import styled from "styled-components/native";
import List from "./components/List";
import colors from "./utils/GlobalStyles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.Background};
`;

export const ListHelp = styled(List)``;
