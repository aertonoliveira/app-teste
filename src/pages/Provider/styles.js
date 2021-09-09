import styled from "styled-components/native";
import List from "./components/List";
import colors from "./utils/GlobalStyles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.SecundaryLighter};
`;

export const ListProvider = styled(List)``;
