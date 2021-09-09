import React, { useState, useEffect } from "react";

import {
  Container,
  PlanContainer,
  PlanIcon,
  PlanTitle,
  PlanItemsContainer,
  PlanItem,
  PlanPrice,
  PlanButton,
  PlanButtonOther,
  PlanList,
  ModalBudgetContainer,
  ModalBudgetSubContainer,
  ModalBudgetSubContainerConfirmed,
  BudgetContainer,
  BudgetHold,
  BudgetTitle,
  BudgetTotal,
  BudgetSubTitle,
  PlanBox,
  PlanButtonQuestion,
  PlanQuestionMarker,
  BoxIndicator,
  ImageIndicator,
} from "./styles";

import PProIcon from "../../assets/other-icons/selo-pro.png";
import PPremiumIcon from "../../assets/other-icons/selo-premium.png";

import WalletRouterBudget from "../../router/WalletRouterBudget";
import WalletContext from "../../pages/WalletBudget/WalletContext";

import { useSelector } from "react-redux";
import api from "../../services/api";

import QuestionIcon from "../../assets/img/category/question.png";
import SeloIcon from "../../assets/other-icons/selo-pro.png";

import Indicator2Icon from "../../assets/other-icons/indicator2.png";

function PlansYears() {
  const userId = useSelector((store) => store.user.profile.id);

  const [modalBudget, setModalBudget] = useState(false);
  const [item, setItem] = useState("");
  const [nameSignature, setNameSignature] = useState("");
  const [signature, setSignature] = useState("");
  const [value, setValue] = useState("");

  const [plan, setPlan] = useState("");

  const [allPlans, setAllPlans] = useState([
    {
      id: 1,
      type: "PRO",
    },
    {
      id: 2,
      type: "PREMIUM",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  async function handleSignature(type, value, name) {
    setValue(value);
    setModalBudget(true);
    setSignature(type);
    setNameSignature(name);
  }

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get(`/getplanusers?id=${userId}`);

      if (response.data) {
        setPlan(response.data.type);
      } else {
        setPlan("");
      }
    }

    loadPlan();
  }, [userId]);

  return (
    <Container>
      <PlanList>
        <PlanContainer>
          <PlanIcon source={PProIcon} />
          <PlanTitle>PRO</PlanTitle>
          <PlanItemsContainer>
            <PlanBox>
              <PlanItem>Kit servisale</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Seguro de vida</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Titulo de capitalização</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Receba mais chamadas</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Apareça com o selo "PRO"</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker
                  style={{ height: 20, width: 20 }}
                  source={SeloIcon}
                />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Leitor de cartão com ou sem chip</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanPrice>R$ 570,00</PlanPrice>
            <PlanItem>Pagamento mensal, durante 1 ano</PlanItem>
          </PlanItemsContainer>
          {plan === "Pro Anual" ? (
            <PlanButtonOther onPress={() => {}}>
              {" "}
              Você é assinante desse plano
            </PlanButtonOther>
          ) : (
            <PlanButtonOther
              onPress={() => {
                handleSignature("PROANUAL", "R$ 570,00", "Pro Anual");
              }}
            >
              {" "}
              Assinar agora!
            </PlanButtonOther>
          )}
        </PlanContainer>
        <PlanContainer>
          <PlanIcon source={PPremiumIcon} />
          <PlanTitle>PREMIUM</PlanTitle>
          <PlanItemsContainer>
            <PlanBox>
              <PlanItem>Kit servisale</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Seguro de vida</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Titulo de capitalização</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Receba mais chamadas</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanBox>
              <PlanItem>Leitor de cartão com ou sem chip</PlanItem>
              <PlanButtonQuestion>
                <PlanQuestionMarker source={QuestionIcon} />
              </PlanButtonQuestion>
            </PlanBox>
            <PlanPrice>R$ 400,00</PlanPrice>
            <PlanItem>Pagamento mensal, durante 1 ano</PlanItem>
          </PlanItemsContainer>
          {plan === "Premium Anual" ? (
            <PlanButtonOther onPress={() => {}}>
              {" "}
              Você é assinante desse plano
            </PlanButtonOther>
          ) : (
            <PlanButtonOther
              onPress={() => {
                handleSignature("PREMIUMANUAL", "R$ 400,00", "Premium Anual");
              }}
            >
              {" "}
              Assinar agora!
            </PlanButtonOther>
          )}
        </PlanContainer>
      </PlanList>
      <ModalBudgetContainer visible={modalBudget} transparent>
        <ModalBudgetSubContainer>
          <BudgetContainer>
            <BudgetHold onPress={() => setModalBudget(false)} />
            <BudgetTitle>Pagar</BudgetTitle>
            <BudgetTotal>{value}</BudgetTotal>
            <BudgetSubTitle>{nameSignature}</BudgetSubTitle>
          </BudgetContainer>
          <WalletContext.Provider
            value={{
              item,
              value,
              nameSignature,
              signature,
            }}
          >
            <WalletRouterBudget />
          </WalletContext.Provider>
        </ModalBudgetSubContainer>
      </ModalBudgetContainer>
      <>
        <BoxIndicator>
          <ImageIndicator source={Indicator2Icon} />
        </BoxIndicator>
      </>
    </Container>
  );
}

export default PlansYears;
