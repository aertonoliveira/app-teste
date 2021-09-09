import styled from "styled-components/native";

import BackgroundDefault from "./components/Background/BackgroundDefault";
import List from "./components/List";
import CardIcon from "./components/Cards/CardIcon";
import { H2 } from "./components/Text";
import colors from "./utils/GlobalStyles/colors";

export const Container = styled(BackgroundDefault)``;

export const Title = styled(H2)`
  font-weight: bold;
  color: ${colors.TitlePrimary};
`;

export const ListCategories = styled(List).attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const CardCategory = styled(CardIcon)``;
