import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";

import {
  Container,
  BoxTitle,
  TextTitle,
  BoxForm,
  FormInput,
  FormInputZipCode,
  FormInputPrefix,
  ButtonSubmit,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from "react-redux";
import api from "../../services/api";
import apiZip from "../../services/apiZip";

const ConfirmData = () => {
  const navigation = useNavigation();

  const userId = useSelector((store) => store.user.profile.id);

  const [loading, setLoading] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [address, setAddress] = useState("");
  const [ccemail, setCCEmail] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [complement, setComplement] = useState("");

  async function handleSubmit() {
    setLoading(true);

    const userdata = await api.get(`/users/${userId}`);

    const zipdata = await apiZip.get(`${zipcode}/json/`);

    if (zipdata.data.status === 400) {
      Alert.alert("Cep inválido");
      return;
    }

    try {
      const register = await api.post("createuseriugu", {
        email: userdata.data.email,
        name: userdata.data.first_name,
        notes: "",
        phone:
          userdata.data.phone.slice(9, 10) +
          userdata.data.phone.slice(11, 15) +
          userdata.data.phone.slice(16, 20),
        phone_prefix: userdata.data.phone.slice(5, 7),
        cpf_cnpj: userdata.data.cpf ? userdata.data.cpf : userdata.data.cnpj,
        cc_emails: ccemail,
        zip_code: zipcode,
        number: number,
        street: address,
        city: zipdata.localidade,
        state: zipdata.uf,
        district: "nda",
        complement: complement,
      });

      console.log(register.data);

      const upUser = await api.put("usersidiugu", {
        id: userId,
        iugu: register.data.id,
        address: address,
        number: number,
        city: zipdata.localidade,
        state: zipdata.uf,
        district: "nda",
        complement: complement,
        zip_code: zipcode,
      });

      setLoading(false);

      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Não foi possível realizar o registro no momento, tente novamente mais tarde"
      );
      setLoading(false);
    }
  }

  return (
    <Container>
      <ScrollView style={{ flex: 1 }}>
        <BoxTitle>
          <TextTitle>Complete seu registro</TextTitle>
        </BoxTitle>
        <BoxForm>
          <FormInputZipCode
            title={"Cep"}
            placeholder="Digite seu cep"
            value={zipcode}
            onChangeText={setZipCode}
          />
          <FormInput
            title={"Endereço"}
            placeholder="Digite seu endereço"
            value={address}
            onChangeText={setAddress}
          />
          <FormInput
            title={"Número"}
            placeholder="Número"
            value={number}
            onChangeText={setNumber}
            keyboardType={"number"}
          />
          <FormInput
            title={"Complemento"}
            placeholder="Complemento"
            value={complement}
            onChangeText={setComplement}
          />
          <FormInput
            title={"E-mail de recuperação da conta"}
            placeholder="E-mail"
            keyboardType="email-address"
            value={ccemail}
            onChangeText={setCCEmail}
          />
        </BoxForm>
        <ButtonSubmit loading={loading} onPress={handleSubmit}>
          Enviar
        </ButtonSubmit>
      </ScrollView>
    </Container>
  );
};

export default ConfirmData;
