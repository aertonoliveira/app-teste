import styled from "styled-components/native";
import colors from "../../utils/GlobalStyles/colors";

import ButtonPlan from "../../components/Buttons/ButtonPlan";
import ButtonPlanOther from "../../components/Buttons/ButtonPlan/ButtonPlanOther";

import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colors.Background};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const PlanContainer = styled.View`
  width: ${width / 1.2};
  height: ${height / 1.6};
  background-color: #fff;
  border-radius: 20px;
  align-items: center;
  padding: 15px;
  margin: 0px 35px;
`;

export const PlanIcon = styled.Image`
  width: ${width / 7.0};
  height: ${height / 12.0};
`;

export const PlanTitle = styled.Text`
  font-size: 16px;
  color: ${colors.Primary};
  margin-top: ${height / 50.0};
`;

export const PlanItemsContainer = styled.View`
  align-items: center;
  margin-top: ${height / 50.0};
`;

export const PlanItem = styled.Text`
  font-size: 14px;
  color: ${colors.SecundaryLighter};
  margin: 2.5px;
`;

export const PlanPrice = styled.Text`
  font-size: 18px;
  color: ${colors.Background};
  font-weight: bold;
  margin-top: ${height / 50.0};
`;

export const PlanButton = styled(ButtonPlan)`
  margin-top: 7px;
`;
export const PlanButtonOther = styled(ButtonPlanOther)`
  margin-top: 7px;
`;

export const PlanList = styled.ScrollView.attrs({
  horizontal: true,
  pagingEnabled: true,
  contentContainerStyle: {
    alignItems: "center",
  },
})``;

export const ModalBudgetContainer = styled.Modal.attrs({
  animationType: "slide",
})``;

export const ModalBudgetSubContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;
export const ModalBudgetSubContainerConfirmed = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const BudgetContainer = styled.View`
  background-color: ${colors.BackgroundAuthClient};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const BudgetTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-top: 2px;
`;
export const BudgetSubTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-top: 2px;
`;

export const BudgetTotal = styled.Text`
  font-size: 22px;
  font-weight: bold;
  align-self: stretch;
  text-align: center;
  color: #fff;
  margin-top: 1px;
`;

export const BudgetHold = styled.TouchableOpacity`
  height: 7px;
  width: 60px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const BoxBackground = styled.View`
  height: 100%;
`;

export const PlanBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PlanButtonQuestion = styled.TouchableOpacity`
  height: 15px;
  width: 15px;
  margin-left: 15px;
`;

export const PlanQuestionMarker = styled.Image`
  height: 15px;
  width: 15px;
`;

export const BoxIndicator = styled.View`
  width: 100%;
  height: auto;

  background-color: ${colors.Background};
  flex-direction: row;
  justify-content: center;
`;

export const ImageIndicator = styled.Image`
  width: 50px;
  height: 50px;
`;
