import styled from "styled-components/native";
import CheckBox from "@react-native-community/checkbox";

export const Check = styled(CheckBox).attrs({
  tintColors: { true: "#fff", false: "rgba(255, 255, 255, 0.6)" },
  tintColor: "rgba(255, 255, 255, 0.6)",
  onCheckColor: "#fff",
  onTintColor: "#fff",
})``;
