import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";

import api from "../../services/api";
import HeaderDrawer from "../../components/HeaderDrawer";

// actions

import Services from "../Services";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Loader,
  LoaderContainer,
  ProAdContainer,
  ProAdSubContainer,
  ProAdTitle,
  ProAdSubTitle,
  ProAdIcon,
  ProAdButton,
  ContainerIntro,
  BoxHome,
  BoxServices,
  BoxWallet,
  BoxChat,
  BoxProfile,
} from "./styles";

import { Coachmark } from "../../components/Coachmark";

export default function Home() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userData = useSelector((state) => state.auth.token);

  const userId = useSelector((state) => state.user.profile);

  const [intro, setIntro] = useState(false);

  const [pro, setPro] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [id_service, setId_Service] = useState(0);

  useEffect(() => {
    async function loadIntro() {
      const response = await api.get(`/intro?id=${userId.id}`);

      setIntro(response.data.intro);
    }

    async function loadServices() {
      const responseIdService = await api.get(
        `/providers-services?user=${userId.id}`,
        {
          headers: {
            Authorization: `Bearer ${userData}`,
          },
        }
      );

      setId_Service(responseIdService.data.service_id);

      const response = await api.get(
        `/requests/service?service=${responseIdService.data.service_id}`,
        {
          headers: {
            Authorization: `Bearer ${userData}`,
          },
        }
      );

      setServices(response.data);

      setLoading(false);
    }

    loadServices();
    loadIntro();
  }, [userData, userId]);

  async function getUserConfig() {
    try {
      const response = await api.get("/requests/status/2");

      // filter without provider

      const filterServices = response.data.filter(
        (service) => service.provider_id === null
      );

      setServices(filterServices);

      console.log(response.data);
    } catch (error) {
      console.log("error");
      Alert.alert("Serviços", "Houve um error na busca de serviços.");
    } finally {
      setLoading(false);
    }
  }

  async function handleIntro() {
    await api.put(`/intro?id=${userId.id}`);
  }

  return (
    <Container>
      <HeaderDrawer />

      {!pro && (
        <ProAdButton onPress={() => navigation.navigate("PlansStack")}>
          <ProAdContainer
            colors={["#FFC700", "#FF9900"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <ProAdSubContainer>
              <ProAdTitle>Assine agora</ProAdTitle>
              <ProAdSubTitle>Obtenha vantagens exclusivas!</ProAdSubTitle>
            </ProAdSubContainer>
            <ProAdIcon />
          </ProAdContainer>
        </ProAdButton>
      )}

      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <Services
          navigation={navigation}
          loading={loading}
          servicesList={services}
        />
      )}

      {!intro && (
        <ContainerIntro>
          <Coachmark
            autoShow
            message="Aqui você verá as solicitações de serviços"
            onHide={handleIntro}
          >
            <BoxHome />
          </Coachmark>

          <Coachmark
            autoShow
            message="Aqui você verá seus próximos serviços e os serviços prestados anteriormente."
          >
            <BoxServices />
          </Coachmark>

          <Coachmark
            autoShow
            message="Aqui você verá seu saldo e dados bancários, além de poder transferir o dinheiro recebido para a sua conta."
          >
            <BoxWallet />
          </Coachmark>

          <Coachmark
            autoShow
            message="Entre em contato com seus clientes para fazer a negociação do serviço."
          >
            <BoxChat />
          </Coachmark>

          <Coachmark
            autoShow
            message="Veja e configure seu perfil que será exibido quando alguém solicitar seus serviços."
          >
            <BoxProfile />
          </Coachmark>
        </ContainerIntro>
      )}
    </Container>
  );
}
