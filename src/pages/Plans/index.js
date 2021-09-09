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
  PlanList,
  PlanBox,
  ModalBudgetContainer,
  ModalBudgetSubContainer,
  ModalBudgetSubContainerConfirmed,
  BudgetContainer,
  BudgetHold,
  BudgetTitle,
  BudgetTotal,
  BudgetSubTitle,
  BoxBackground,
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
import { set } from "date-fns";

import HelpShow from "../../pages/Help/HelpShow";

import QuestionIcon from "../../assets/img/category/question.png";
import SeloIcon from "../../assets/other-icons/selo-pro.png";

import Indicator1Icon from "../../assets/other-icons/indicator1.png";

function Plans() {
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

  function handleOpenModal() {
    setOpenModal(true);
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

  async function handleSignature(type, value, name) {
    setValue(value);
    setModalBudget(true);
    setSignature(type);
    setNameSignature(name);
  }

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
            <PlanPrice>R$ 300,00</PlanPrice>
            <PlanItem>Pagamento mensal, durante 3 meses</PlanItem>
          </PlanItemsContainer>
          {plan === "Pro Trimestral" ? (
            <PlanButton onPress={() => {}}>
              Você é assinante desse plano
            </PlanButton>
          ) : (
            <PlanButton
              onPress={() => {
                handleSignature("PROTRIMESTRAL", "R$ 300,00", "Pro Trimestral");
              }}
            >
              Assinar agora!
            </PlanButton>
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
            <PlanPrice>R$ 200,00</PlanPrice>
            <PlanItem>Pagamento mensal, durante 3 meses</PlanItem>
          </PlanItemsContainer>
          {plan === "Premium Trimestral" ? (
            <PlanButton onPress={() => {}}>
              Você é Assinante desse plano
            </PlanButton>
          ) : (
            <PlanButton
              onPress={() => {
                handleSignature(
                  "PREMIUMTRIMESTRAL",
                  "R$ 200,00",
                  "Premium Trimestral"
                );
              }}
            >
              Assinar agora!
            </PlanButton>
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

      {openModal && <HelpShow />}
      <>
        <BoxIndicator>
          <ImageIndicator source={Indicator1Icon} />
        </BoxIndicator>
      </>
    </Container>
  );
}

export default Plans;
