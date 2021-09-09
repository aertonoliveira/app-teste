import React, { useState, useRef, useContext } from "react";
import { Alert } from "react-native";

import {
  Container,
  FormInput,
  FormInputCPF,
  FormRow,
  FormInputOthers,
  ButtonSend,
  SwitchContainer,
  SwitchText,
  SwitchEnable,
} from "./styles";

import WalletContext from "./WalletContext";
import colors from "../../utils/GlobalStyles/colors";
import { useSelector } from "react-redux";
import api from "../../services/api";
import { Title } from "react-native-paper";

function NewAccount() {
  const userId = useSelector((state) => state.user.profile.id);

  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [agency, setAgency] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [saveLikeFavorite, setSaveLikeFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  const { amount, total, setBudgetConfirmed } = useContext(WalletContext);

  const toggleSwitch = () =>
    setSaveLikeFavorite((previousState) => !previousState);

  async function handleSubmit() {
    try {
      setLoading(true);

      if (
        bank === "" ||
        account === "" ||
        agency === "" ||
        name === "" ||
        cpf === ""
      ) {
        Alert.alert("Por favor, preencha todos os dados");
        setLoading(false);
        return;
      }

      if (total <= 0) {
        Alert.alert("Por favor, informe um valor para realizar o saque");
        setLoading(false);
        return;
      }

      if (total > amount) {
        Alert.alert(
          "O valor do saque não pode ser maior que o valor disponivel"
        );
        setLoading(false);
        return;
      }

      // save banco no banco
      const response = await api.post("accountsproviders", {
        provider_id: userId,
        bank,
        agency,
        account,
        type: account.slice(7, 8),
        name,
        document: cpf,
        favorite: saveLikeFavorite ? saveLikeFavorite : false,
      });

      if (response.data.message) {
        Alert.alert("Já existe uma conta criada com esse número");
        setLoading(false);
        return;
      }

      const dateFn = new Date();

      const responseRequest = await api.post("/requestwithdraw", {
        provider_id: userId,
        account: response.data.id,
        value: parseFloat(total),
        status: 0,
        date:
          dateFn.getMonth() +
          "/" +
          dateFn.getDay() +
          "/" +
          dateFn.getFullYear(),
      });

      if (responseRequest.data.message) {
        Alert.alert(
          "O valor do saque não pode ser maior que o valor disponivel"
        );
        setLoading(false);
        return;
      }

      setBank("");
      setAccount("");
      setAgency("");
      setName("");
      setCpf("");
      setSaveLikeFavorite(false);

      setBudgetConfirmed(true);
      setLoading(false);
    } catch (error) {
      Alert.alert(
        "Houve um problema ao realizar a solicitação do saque, tente novamente mais tarde"
      );
      setLoading(false);
    }
  }

  return (
    <Container>
      <FormInput
        title={"Número do Banco ou Instituição"}
        placeholder="Número"
        value={bank}
        onChangeText={setBank}
        keyboardType={"numeric"}
        maxLength={6}
      />
      <FormRow>
        <FormInputOthers
          title={"Agência"}
          placeholder="0000"
          value={agency}
          onChangeText={setAgency}
          maxLength={4}
        />
        <FormInputOthers
          title={"Conta"}
          placeholder="00000000"
          value={account}
          onChangeText={setAccount}
          maxLength={8}
        />
      </FormRow>
      <FormInput
        title={"Nome do titular"}
        placeholder="Ex: João Silva"
        value={name}
        onChangeText={setName}
      />
      <FormInputCPF
        title="CPF"
        keyboardType="number"
        value={cpf}
        onChangeText={(formatted) => {
          setCpf(formatted);
        }}
      />

      <SwitchContainer>
        <SwitchText>Salvar como favorito</SwitchText>
        <SwitchEnable
          thumbColor={saveLikeFavorite ? colors.BackgroundRounded : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={saveLikeFavorite}
        />
      </SwitchContainer>

      <ButtonSend loading={loading} onPress={handleSubmit}>
        Enviar valor
      </ButtonSend>
    </Container>
  );
}

export default NewAccount;
// Desenvolvido por Hubert Ryan
