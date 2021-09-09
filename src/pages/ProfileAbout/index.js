import React, { useState, useRef, useEffect } from "react";
import { Alert } from "react-native";

// components

import { Container, FormInput, FormInputPhone, BoxButton } from "./styles";

import { useSelector } from "react-redux";

import Button from "../../components/Buttons/Button";

// modules

import api from "../../services/api";

function ProfileAbout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();

  const userId = useSelector((state) => state.user.profile.id);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(`users/${userId}`);

      setName(response.data.first_name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
    }

    loadData();
  }, [userId]);

  async function updateUser() {
    try {
      if (password !== "") {
        await api.put("users", {
          first_name: name,
          email,
          phone,
          password,
        });
      } else {
        await api.put("users", {
          first_name: name,
          email,
          phone,
        });
      }

      Alert.alert("Sucesso", "Dados atualizado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <FormInput
        title={"Nome"}
        placeholder="Digite seu primeiro nome"
        onSubmitEditing={() => updateUser()}
        value={name}
        onChangeText={setName}
      />

      <FormInput
        title="E-mail"
        keyboardType="email-address"
        placeholder="Digite seu email"
        ref={emailRef}
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={() => updateUser()}
      />

      <FormInputPhone
        title="Telefone"
        value={phone}
        onChangeText={(formatted, extracted) => setPhone(formatted)}
        onSubmitEditing={() => updateUser()}
      />

      <FormInput
        title="Senha"
        passwordField
        placeholder="Alterar senha"
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={() => updateUser()}
      />

      <BoxButton>
        <Button onPress={updateUser}>Atualizar Perfil</Button>
      </BoxButton>
    </Container>
  );
}

export default ProfileAbout;
// Desenvolvido por Hubert Ryan
