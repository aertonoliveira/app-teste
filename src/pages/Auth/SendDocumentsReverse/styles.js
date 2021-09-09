import styled from "styled-components/native";

import Button from "../../../components/Buttons/Button";
import colors from "../../../utils/GlobalStyles/colors";

export const Container = styled.ScrollView`
  background-color: ${colors.BackgroundAuthClient};
  flex: 1;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
  padding: 0 30px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const DocumentId = styled.Image`
  width: 63px;
  height: 63px;
  margin: 100px 0px;
  align-self: center;
`;
