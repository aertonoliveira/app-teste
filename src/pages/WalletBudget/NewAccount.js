import React, { useState, useRef, useContext, useEffect } from "react";
import { Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  Container,
  FormInput,
  InputCard,
  FormInputCPF,
  FormRow,
  FormInputOthers,
  FormInputDate,
  FormInputCVV,
  ButtonSend,
  SwitchContainer,
  SwitchText,
  SwitchEnable,
  BoxPicker,
  TitleText,
} from "./styles";

// modules

import WalletContext from "./WalletContext";
import colors from "../../utils/GlobalStyles/colors";
import { useNavigation } from "@react-navigation/native";
import { withNavigationFocus } from "@react-navigation/compat";
import api from "../../services/api";
import { useSelector } from "react-redux";

function NewAccount({ isFocused }) {
  const navigation = useNavigation();

  const [plots, setPlots] = useState("");
  const [select, setSelect] = useState("");

  //form
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [validate, setValidate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cpf, setCpf] = useState("");
  const [saveLikeFavorite, setSaveLikeFavorite] = useState("");

  const userId = useSelector((state) => state.user.profile.id);

  const { item, value, nameSignature, signature } = useContext(WalletContext);

  const toggleSwitch = () =>
    setSaveLikeFavorite((previousState) => !previousState);

  async function goTransfer() {
    try {
      setLoading(true);

      if (
        name === "" ||
        number === "" ||
        lastName === "" ||
        validate === "" ||
        cardCvv === "" ||
        cpf === ""
      ) {
        Alert.alert("Por favor, preencha todos os campos");
        setLoading(false);
        return;
      }

      //pegar id do iugu no banco e dados do usuario
      const getUser = await api.get(`/iugu?id=${userId}`);

      //iugu
      const createTokenCard = await api.post("createcardiugu", {
        number: number,
        verification_value: cardCvv,
        first_name: name,
        last_name: lastName,
        month: validate.slice(0, 2),
        year: validate.slice(3, 7),
      });

      const createFormPayment = await api.post("createformofpayment", {
        customer_id: getUser.data.iugu_id,
        description: "Assinatura plano",
        set_as_default: saveLikeFavorite ? saveLikeFavorite : false,
        token: createTokenCard.data.id,
      });

      const date = new Date();

      //banco local
      const responseCard = await api.post("/cards", {
        user: userId,
        last_numbers: createTokenCard.data.extra_info.display_number,
        flag: createTokenCard.data.extra_info.brand,
        favorite: saveLikeFavorite ? saveLikeFavorite : false,
      });

      async function loadSignature(url) {
        const response = await api.post(`/${url}`, {
          customer_id: getUser.data.iugu_id,
        });

        //salvar assinatura no banco
        const responseSaveSignature = await api.post("/signature-save", {
          user_id: userId,
          id_signature: response.data.id,
          type: nameSignature,
          url,
        });

        console.log(responseSaveSignature.data);
      }

      //assinar
      if (nameSignature === "Pro Trimestral") {
        loadSignature("signatureprotri");
      } else if (nameSignature === "Premium Trimestral") {
        loadSignature("signaturepremiumtri");
      } else if (nameSignature === "Pro Anual") {
        loadSignature("signatureproanual");
      } else if (nameSignature === "Premium Anual") {
        loadSignature("signaturepremium");
      }

      await api.put(`/users-plan?id=${userId}`);

      setLoading(false);
      setName("");
      setNumber("");
      setLastName("");
      setValidate("");
      setCardCvv("");
      setCpf("");
      Alert.alert("Pagamento realizado com sucesso!");

      //baixar aba
    } catch (error) {
      setLoading(false);
      Alert.alert("erro violento");
      console.log(error);
    }
  }

  return (
    <Container>
      <InputCard
        title={"Número do cartão de crédito"}
        placeholder="Digite o número do cartão"
        value={number}
        onChangeText={setNumber}
      />
      <FormInput
        title={"Nome do titular"}
        placeholder="Ex: João"
        value={name}
        onChangeText={setName}
      />
      <FormInput
        title={"Sobrenome do titular"}
        placeholder="Ex: Silva"
        value={lastName}
        onChangeText={setLastName}
      />
      <FormRow>
        <FormInputDate
          title={"Validade"}
          placeholder="MM/AAAA"
          value={validate}
          onChangeText={setValidate}
        />
        <FormInputCVV
          title={"CVV"}
          placeholder="Código"
          value={cardCvv}
          onChangeText={setCardCvv}
          maxLength={16}
        />
      </FormRow>
      <FormInputCPF
        title="CPF"
        keyboardType="number"
        value={cpf}
        onChangeText={(formatted) => {
          setCpf(formatted);
        }}
      />
      <BoxPicker>
        <TitleText>Número de parcelas</TitleText>
        <Picker
          selectedValue={select}
          style={{ height: 20, width: 300, color: "#fff" }}
          onValueChange={(itemValue, itemIndex) => setSelect(itemValue)}
        >
          <Picker.Item key={"A vista"} label={"A vista"} value={"A vista"} />
        </Picker>
      </BoxPicker>
      <SwitchContainer>
        <SwitchText style={{ color: "#fff" }}>Salvar como favorito</SwitchText>
        <SwitchEnable
          thumbColor={saveLikeFavorite ? colors.BackgroundRounded : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={saveLikeFavorite}
        />
      </SwitchContainer>

      <ButtonSend loading={loading} onPress={() => goTransfer()}>
        Enviar valor
      </ButtonSend>
    </Container>
  );
}

export default withNavigationFocus(NewAccount);
