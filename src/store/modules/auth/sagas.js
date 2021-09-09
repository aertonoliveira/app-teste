import { Alert } from "react-native";
import { takeLatest, call, put, all } from "redux-saga/effects";

import api from "../../../services/api";

import { signInSuccess, signFailure } from "./actions";
import { updateProfileSuccess } from "../user/actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    console.log("Opa");

    const response = yield call(api.post, "sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    console.log("Logged!");

    yield put(signInSuccess(token));
    yield put(updateProfileSuccess(user));
  } catch (err) {
    Alert.alert(
      "Falha na autenticação",
      "Houve um erro no login, verifique seus dados"
    );
    yield put(signFailure());
  }
}

export function* signUp({
  payload: { first_name, email, password, phone, cpf, birthdate, navigation },
}) {
  try {
    console.log("first_name", first_name);
    console.log("email", email);
    console.log("password", password);
    console.log("phone", phone);
    console.log("cpf", cpf);
    console.log("birthdate", birthdate);

    const response = yield call(api.post, "providers", {
      first_name,
      email,
      password,
      phone,
      cpf,
      birthdate,
    });

    if (response.data.error) {
      Alert.alert("Já existe uma conta com o e-mail informado");
      yield put(signFailure());
      return;
    }

    if (response) {
      const userConfigResponse = yield call(api.post, "sessions", {
        email,
        password,
      });

      const { token, user } = userConfigResponse.data;

      yield put(updateProfileSuccess(user));

      // get user data when home is started

      api.defaults.headers.Authorization = `Bearer ${token}`;
      navigation.navigate("SelectService", { data: response.data });
    }
  } catch (err) {
    console.log("error", err);

    Alert.alert(
      "Falha no cadastro",
      "Houve um erro no cadastro, verifique seus dados"
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
]);
