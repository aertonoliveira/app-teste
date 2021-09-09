import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import HeaderDrawer from "../../components/HeaderDrawer";

// actions

import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  SubContainer,
  Title,
  SubTitle,
  Loader,
  LoaderContainer,
  ModalContainer,
  InsideModalContainer,
  ModalBox,
  TitleModalBox,
  SubTitleModalBox,
  ButtonModalBox,
  IconSuccess,
} from "./styles";

// context

import AuthContext from "../../pages/Auth/AuthContext";

function ProviderStatus({ status }) {
  const navigation = useNavigation();

  const [popupInitial, setPopupInitial] = useState(false);
  const [loading, setLoading] = useState(true);
  const { registred, setRegistred } = useContext(AuthContext);

  // user config

  const userData = useSelector((store) => store.user.profile);

  useEffect(() => {
    getUserConfig();
  }, [getUserConfig]);

  async function getUserConfig() {
    try {
      // update user data with new route
      // ....

      if (registred) {
        setRegistred(false);
        setPopupInitial(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function disablePopup() {
    setPopupInitial(false);
  }

  return (
    <Container>
      <HeaderDrawer />
      {!loading ? (
        <>
          <SubContainer>
            <Title>Seja bem-vindo, {userData.first_name}</Title>
            <SubTitle>
              Estamos checando seus dados cadastrais e isso pode levar até 48h.
              Não se preocupe, assim que esta etapa estiver concluída, você será
              notificado.
            </SubTitle>
          </SubContainer>
        </>
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}

      <ModalContainer visible={popupInitial}>
        <InsideModalContainer>
          <ModalBox>
            <IconSuccess />
            <TitleModalBox>Concluído!</TitleModalBox>
            <SubTitleModalBox>
              Seu cadastro foi concluído com sucesso! Estamos felizes em ter
              você conosco!
            </SubTitleModalBox>

            <ButtonModalBox loading={loading} onPress={() => disablePopup()}>
              Acessar o aplicativo
            </ButtonModalBox>
          </ModalBox>
        </InsideModalContainer>
      </ModalContainer>
    </Container>
  );
}

export default ProviderStatus;
