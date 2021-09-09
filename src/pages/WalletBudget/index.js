import React, { useState, useEffect } from "react";
import { Alert, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Info,
  BalanceContainer,
  Balance,
  BalanceBold,
  BalanceSubTitle,
  GetPriceContainer,
  GetPriceText,
  ModalBudgetContainer,
  ModalBudgetSubContainer,
  ModalBudgetSubContainerConfirmed,
  BudgetContainer,
  BudgetTitle,
  BudgetInput,
  BudgetHold,
  ModalBox,
  TitleModalBox,
  SubTitleModalBox,
  ButtonModalBox,
  IconSuccess,
  ContainerPrice,
} from "./styles";

import WalletRouter from "./router/WalletRouter";
import WalletContext from "./WalletContext";
import { withNavigationFocus } from "@react-navigation/compat";

import api from "./services/api";
import { useSelector } from "react-redux";

function WalletBudget({ isFocused }) {
  const navigation = useNavigation();

  const userId = useSelector((state) => state.user.profile.id);

  const [showPrice, setShowPrice] = useState(false);
  const [modalTransfer, setModalTransfer] = useState(false);
  const [budgetConfirmed, setBudgetConfirmed] = useState(false);
  const [total, setTotal] = useState("");

  const [name, setName] = useState("");
  const [agency, setAgency] = useState("");
  const [account, setAccount] = useState("");
  const [title, setTitle] = useState("");
  const [cpf, setCpf] = useState("");
  const [saveLikeFavorite, setSaveLikeFavorite] = useState(false);

  const [amount, setAmount] = useState("");
  const [register, setRegister] = useState(false);

  useEffect(() => {
    async function loadExtracts() {
      if (isFocused) {
        const response = await api.get(`getpayments?id=${userId}`);

        const responseRegister = await api.get(`withdraw?id=${userId}`);

        setRegister(responseRegister.data.withdraw);

        if (responseRegister.data.withdraw === false) {
          Alert.alert(
            "Confirmar seus dados",
            "Para que seja possível receber pagamentos, confirme seus dados!"
          );

          navigation.navigate("ConfirmData");
        }

        setAmount(response.data.value);
      }
    }

    loadExtracts();
  }, [navigation, userId, isFocused]);

  function closeModalTransfer() {
    setModalTransfer(false);
    setBudgetConfirmed(false);
  }

  async function handleSubmit() {
    const response = await api.get(`withdraw?id=${userId}`);

    if (amount <= 0) {
      Alert.alert("Seu saldo está zerado, você não pode realizar um saque");
      return;
    }

    if (response.data.withdraw === false) {
      try {
        const register = await api.post("createuseriugu", {
          email: "jorge@mail.com",
          name: "Jorge teste",
          notes: "",
          phone: "",
          phone_prefix: "",
          cpf_cnpj: "",
          cc_emails: "",
          zip_code: "",
          number: "",
          street: "",
          city: "",
          state: "",
          district: "",
          complement: "",
        });

        setModalTransfer(true);
      } catch (error) {
        setModalTransfer(false);
        Alert.alert(
          "Não foi possível realizar o registro no momento, tente novamente mais tarde"
        );
      }
      //setModalTransfer(true);
    } else {
      setModalTransfer(true);
    }
  }

  return (
    <ContainerPrice>
      <Info>
        <BalanceContainer>
          <Balance>Saldo disponível</Balance>
          <Balance>
            R$ <BalanceSubTitle>R$ {amount}</BalanceSubTitle>
          </Balance>
        </BalanceContainer>
        <GetPriceContainer onPress={handleSubmit}>
          <GetPriceText>Sacar</GetPriceText>
        </GetPriceContainer>
      </Info>

      <BalanceBold>
        Lançamentos futuros: <Balance>R$ 0,00</Balance>
      </BalanceBold>

      <ModalBudgetContainer visible={modalTransfer} transparent>
        {!budgetConfirmed ? (
          <ModalBudgetSubContainer>
            <BudgetContainer>
              <BudgetHold onPress={() => setModalTransfer(false)} />
              <BudgetTitle>Quanto deseja sacar?</BudgetTitle>
              <BudgetInput
                autoFocus
                value={total}
                onChangeText={(text, formated) => setTotal(text)}
              />
              <BudgetTitle>Saldo disponível R$ 0,00</BudgetTitle>
            </BudgetContainer>
            <WalletContext.Provider
              value={{
                total,
                setBudgetConfirmed,
                name,
                setName,
                account,
                setAccount,
                agency,
                setAgency,
                title,
                setTitle,
                cpf,
                setCpf,
                saveLikeFavorite,
                setSaveLikeFavorite,
              }}
            >
              <WalletRouter />
            </WalletContext.Provider>
          </ModalBudgetSubContainer>
        ) : (
          <ModalBudgetSubContainerConfirmed>
            <ModalBox>
              <IconSuccess />
              <TitleModalBox>Concluído!</TitleModalBox>
              <SubTitleModalBox>
                A solicitação de saque foi concluída! Em até 48h você receberá o
                valor na conta informada.
              </SubTitleModalBox>

              <ButtonModalBox onPress={() => closeModalTransfer()}>
                Fechar
              </ButtonModalBox>
            </ModalBox>
          </ModalBudgetSubContainerConfirmed>
        )}
      </ModalBudgetContainer>
    </ContainerPrice>
  );
}

export default withNavigationFocus(WalletBudget);
