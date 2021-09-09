import React, { useRef, useState, useCallback } from "react";
import { Switch, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { cpf as validateCpf, cnpj as validateCnpj } from "cpf-cnpj-validator";

// components

import BackgroundAuth from "../../../components/BackgroundAuth";

// Actions

import {
  signUpRequest,
  signFailure,
} from "../../../store/modules/auth/actions";

import {
  Container,
  Form,
  FormInput,
  FormInputCPF,
  FormInputPhone,
  FormInputBirthday,
  SubmitButton,
  RegisterContainer,
  RegisterText,
  RegisterTextBold,
  TitleInput,
  FormInputCNPJ,
} from "./styles";

export default function SingUp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const emailRef = useRef();
  const passwordRef = useRef();
  // const phoneRef = useRef();
  // const cpfRef = useRef();

  // const rgRef = useRef();

  const [first_name, setFirst_name] = useState("");
  // const [last_name, setLast_name] = useState('');
  const [birthdate, setBirthdate] = useState("");

  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  // const [rg, setRg] = useState('');
  // const [date_accept_user_terms, setDate_accept_user_terms] = useState('');
  // const [showDatePicker, setShowDatePicker] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCpfEnabled, setIsCpfEnabled] = useState(true);
  const [isCnpjEnabled, setIsCnpjEnabled] = useState(false);

  const loading = useSelector((state) => state.auth.loading);

  const toggleSwitch = () => {
    setIsCpfEnabled((previousState) => !previousState);
    setIsCnpjEnabled((previousState) => !previousState);
  };

  async function handleSubmit() {
    console.log("Trying...");

    try {
      const schema = Yup.object().shape({
        first_name: Yup.string().required("O primero nome é obrigatório!"),
        email: Yup.string().email().required("O email é obrigatório!"),
        password: Yup.string().min(6).required("A senha é obrigatória!"),
        phone: Yup.string().min(10).required("O telefone é obrigatório!"),
        cpf: Yup.string().min(11).required("O cpf é obrigatório"),
        birthdate: Yup.string()
          .min(10)
          .required("A data de nascimento é obrigatória"),
      });

      await schema.validate(
        { first_name, email, password, phone, cpf, birthdate },
        {
          abortEarly: false,
        }
      );

      if (isCpfEnabled === true) {
        if (validateCpf.isValid(cpf) === false) {
          Alert.alert("Erro", " Cpf inexistente");
          return false;
        }
      } else if (isCnpjEnabled === true) {
        if (validateCnpj.isValid(cpf) === false) {
          Alert.alert("Erro", "Cnpj inexistente");
          return false;
        }
      }

      dispatch(
        signUpRequest(
          first_name,
          email,
          password,
          phone,
          cpf,
          birthdate,
          navigation
        )
      );
    } catch (error) {
      dispatch(signFailure());
    }
  }

  const goSingIn = useCallback(() => {
    navigation.navigate("SingIn");
  }, [navigation]);

  return (
    <Container>
      <BackgroundAuth text={"Cadastre-se para começar"} />
      <Form>
        <FormInput
          title={"Nome"}
          placeholder="Digite seu primeiro nome"
          onSubmitEditing={() => emailRef.current.focus()}
          value={first_name}
          onChangeText={setFirst_name}
        />

        <FormInput
          title="E-mail"
          keyboardType="email-address"
          placeholder="Digite seu email"
          ref={emailRef}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          title="Senha"
          passwordField
          placeholder="Digite sua senha"
          ref={passwordRef}
          value={password}
          onChangeText={setPassword}
        />

        <TitleInput> Pessoa Jurídica ? </TitleInput>

        <Switch
          style={{ alignSelf: "flex-start" }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isCnpjEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isCnpjEnabled}
        />

        {isCnpjEnabled === true ? (
          <>
            <FormInputCNPJ
              title="CNPJ"
              keyboardType="number"
              value={cpf}
              onChangeText={(formatted) => {
                setCpf(formatted);
              }}
            />
          </>
        ) : (
          <>
            <FormInputCPF
              title="CPF"
              keyboardType="number"
              value={cpf}
              onChangeText={(formatted) => {
                setCpf(formatted);
              }}
            />
          </>
        )}

        <FormInputPhone
          title="Telefone"
          value={phone}
          onChangeText={(formatted, extracted) => setPhone(formatted)}
        />
        <FormInputBirthday
          title="Date de nascimento"
          onSubmitEditing={() => handleSubmit()}
          value={birthdate}
          onChangeText={(formatted, extracted) => setBirthdate(formatted)}
        />

        {/* <FormInput
          placeholder="Digite seu sobrenome"
          returnKeyType="next"
          ref={last_nameRef}
          onSubmitEditing={() => phoneRef.current.focus()}
          value={last_name}
          onChangeText={setLast_name}
        /> */}

        {/* <FormInputRG
          // returnKeyType="next"
          // ref={rgRef}
          // onSubmitEditing={() => cpfRef.current.focus()}
          value={rg}
          onChangeText={formatted => {
            setRg(formatted);
          }}
        /> */}

        {/* <FormButtonDatePicker onPress={() => setShowDatePicker(true)}>
          <FormButtonDatePickerIcon />
          <FormButtonDatePickerText>
            {birthdate
              ? format(birthdate, 'dd/MM/yyyy')
              : 'Selecione a Data de Nascimento'}
          </FormButtonDatePickerText>
        </FormButtonDatePicker> */}

        {/* {showDatePicker && (
          <FormInputDatePicker
            onChange={(_, date) => {
              setShowDatePicker(false);
              setBirthdate(date);
            }}
            maximumDate={new Date()}
          />
        )} */}

        {/* <ContainerTerm>
          <FormInputUseTerms
            data={date_accept_user_terms}
            acceptDate={setDate_accept_user_terms}
          />
          <TextTerm>
            Eu Aceito a <TextTermLink>Política de Privacidade</TextTermLink> e{' '}
            <TextTermLink>Termos de Uso</TextTermLink>
          </TextTerm>
        </ContainerTerm> */}

        <SubmitButton loading={loading} onPress={() => handleSubmit()}>
          Proximo
        </SubmitButton>
      </Form>

      <RegisterContainer onPress={() => goSingIn()}>
        <RegisterText>
          Já possui uma conta?
          <RegisterTextBold> Entrar</RegisterTextBold>
        </RegisterText>
      </RegisterContainer>
    </Container>
  );
}
