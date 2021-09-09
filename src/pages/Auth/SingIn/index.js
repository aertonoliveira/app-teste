import React, { useRef, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  ForgetPasswordButton,
  ForgetPasswordContainer,
  ForgetPasswordText,
  RegisterContainer,
  RegisterText,
  RegisterTextBold,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackgroundAuth from "../../../components/BackgroundAuth";
import Titles from "../../../components/Form/Titles";

import {
  signInRequest,
  signFailure,
} from "../../../store/modules/auth/actions";

export default function SingIn() {
  const dispatch = useDispatch();

  // navigation

  const navigation = useNavigation();

  // ref

  const passwordRef = useRef();

  // states

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    async function loadIntro() {
      try {
        const intro = await AsyncStorage.getItem("@ServisaleClient:intro");

        if (intro === "0" || intro === null) {
          await AsyncStorage.setItem("@ServisaleClient:intro", "1");
          navigation.navigate("Intro");
        } else {
          navigation.navigate("SingIn");
        }
      } catch (error) {
        await AsyncStorage.setItem("@ServisaleClient:intro", "1");
        navigation.navigate("Intro");
      }
    }

    dispatch(signFailure());

    loadIntro();
  }, [dispatch, navigation]);

  function handleSubmit() {
    dispatch(signInRequest(email, password));

    // to another screen
  }

  const goSingUp = useCallback(() => {
    navigation.navigate("SingUp");
  }, [navigation]);

  const goForgotPassword = useCallback(() => {
    console.log("Touched!");
    navigation.navigate("ForgotPassword");
  }, [navigation]);

  return (
    <Container>
      <BackgroundAuth />
      <Form>
        <Titles
          title={"Bem vindo(a) de volta!"}
          subTitle={"Faça login para começar"}
        />
        <FormInput
          title={"E-mail"}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Ex: joaosilva@gmail.com"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={(Text) => setEmail(Text)}
        />
        <FormInput
          ref={passwordRef}
          title={"Senha"}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite sua senha"
          onSubmitEditing={() => handleSubmit()}
          value={password}
          onChangeText={(Text) => setPassword(Text)}
          passwordField
        />

        <ForgetPasswordButton onPress={() => goForgotPassword()}>
          <ForgetPasswordContainer>
            <ForgetPasswordText>Esqueceu a senha?</ForgetPasswordText>
          </ForgetPasswordContainer>
        </ForgetPasswordButton>

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar
        </SubmitButton>

        <RegisterContainer onPress={() => goSingUp()}>
          <RegisterText>
            Não possui uma conta?
            <RegisterTextBold> Cadastre-se</RegisterTextBold>
          </RegisterText>
        </RegisterContainer>
      </Form>
    </Container>
  );
}
