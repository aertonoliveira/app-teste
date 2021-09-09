import React, { useState, useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components

import {
  Container,
  Form,
  FormInput,
  FormInputCPF,
  SubmitButton,
} from "./styles";

import BackgroundAuth from "../../../components/BackgroundAuth";
import Titles from "../../../components/Form/Titles";

// modules

import api from "../../../services/api";
import * as Yup from "yup";

function ForgotPassword() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    try {
      setLoading(true);

      const response = await api.put("password", {
        email,
        cpf,
        password,
      });

      setLoading(false);
      Alert.alert("Senha alterada com sucesso");
      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Houve um erro na atualização do perfil, verifique seus dados"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <BackgroundAuth />

      <Form>
        <Titles
          title={"Recuperar Senha"}
          subTitle={
            "Informe seu e-mail cadastrado para receber informações de redefinição"
          }
        />
        <FormInput
          title={"E-mail"}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Ex: joaosilva@gmail.com"
          value={email}
          onChangeText={(Text) => setEmail(Text)}
        />
        <FormInputCPF
          title="CPF"
          keyboardType="number"
          value={cpf}
          onChangeText={(formatted) => {
            setCpf(formatted);
          }}
        />
        <FormInput
          title="Senha"
          passwordField
          placeholder="Digite sua senha nova"
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Alterar Senha
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default ForgotPassword;
// Desenvolvido por Hubert Ryan
