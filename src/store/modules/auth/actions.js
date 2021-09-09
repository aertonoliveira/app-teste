export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signUpRequest(
  first_name,
  email,
  password,
  phone,
  cpf,
  birthdate,
  navigation
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: {
      first_name,
      email,
      password,
      phone,
      cpf,
      birthdate,
      navigation,
    },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function signUpFinished() {
  return {
    type: '@auth/SIGN_UP_FINISHED',
  };
}
