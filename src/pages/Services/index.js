import React, { useState, useEffect } from "react";
import { ActivityIndicator, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import _ from "underscore";

import {
  Container,
  ListService,
  ContainerService,
  ServiceContainer,
  ServiceProfile,
  ServiceProfileContainer,
  ServiceImage,
  ServiceOptions,
  ServiceTitle,
  ServiceClientName,
  ServiceTimeContainer,
  ServiceTimeCountContainer,
  ServiceTimeCount,
  ServiceTime,
  SubContainerService,
  Separator,
  ServiceStartedContainer,
  ServiceStartedIcon,
  ContainerNoServices,
  TitleNo,
} from "./styles";

// modules

import api from "../../services/api";
import { useSelector } from "react-redux";

import StartIcon from "../../assets/other-icons/bi_play-fill.png";
import ChackIcon from "../../assets/other-icons/chack-2.png";
import CheckIcon from "../../assets/other-icons/bi_check.png";

import Tutorial from "./tutorial";

import { withNavigationFocus } from "@react-navigation/compat";

function Services({ isFocused }) {
  const userId = useSelector((state) => state.user.profile.id);
  const first_name = useSelector((state) => state.user.profile.first_name);

  const [loading, setLoading] = useState(true);
  const [loadingAccept, setLoadingAccept] = useState(false);
  const [services, setServices] = useState([]);

  const [loadingIntro, setLoadingIntro] = useState(true);
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    async function loadIntro() {
      const response = await api.get(`/intro-services?id=${userId}`);

      setIntro(response.data.intro_services);

      setLoadingIntro(false);
    }

    async function loadServices() {
      const response = await api.get(`/servicesrequest?provider=${userId}`);

      setServices(response.data);

      setLoading(false);
    }

    if (isFocused) {
      loadServices();
      loadIntro();
    }
  }, [isFocused, userId]);

  async function loadServices() {
    const response = await api.get(`/servicesrequest?provider=${userId}`);

    setServices(response.data);

    setLoading(false);
  }

  async function handleAttended(id, attended, status, finished, client) {
    if (status === 0) {
      Alert.alert(
        "Você ainda não pode iniciar o serviço, pois o cliente não realizou o pagamento"
      );
      return;
    }

    const id_request = id;

    if (status === 1 && attended === false) {
      Alert.alert("Iniciar serviço", "Deseja realmente iniciar o serviço?", [
        {
          text: "Não",
          onPress: () => {
            Alert.alert("operação abortada pelo usuário");
            return;
          },
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            setLoadingAccept(true);
            const response = await api.put(`attended?id=${id}`);

            const responseNotification = api.get(
              `/notifications?id=${client}`,
              {
                message: `O Profissional ${first_name} acaba de iniciar o serviço`,
              }
            );

            Alert.alert("Serviço iniciado!");

            setLoadingAccept(false);
            loadServices();
          },
        },
      ]);

      return;
    }

    if (status === 1 && attended === true && finished === true) {
      Alert.alert("O serviço ja foi finalizado");
      return;
    }

    if (
      status === 1 &&
      attended === true &&
      finished === true &&
      client === false
    ) {
      Alert.alert(
        "Finalizar serviço",
        "Deseja realmente finalizar o serviço?",
        [
          {
            text: "Não",
            onPress: () => {
              Alert.alert("operação abortada pelo usuário");
              return;
            },
            style: "cancel",
          },
          {
            text: "Sim",
            onPress: async () => {
              setLoadingAccept(true);
              const response = await api.put(`attendedfinished?id=${id}`);

              Alert.alert("Serviço Finalizado!");

              setLoadingAccept(false);
              loadServices();
            },
          },
        ]
      );

      return;
    }
  }

  function List({ data }) {
    return (
      <ContainerService>
        {loading ? (
          <>
            <ActivityIndicator color="#fff" size="small" />
          </>
        ) : (
          <>
            {services.data === "empty" ? (
              <></>
            ) : (
              <>
                {services.map((item) => (
                  <>
                    <SubContainerService
                      key={item.id}
                      onPress={() => {
                        handleAttended(
                          item.request.id,
                          item.request.attended,
                          item.request.status,
                          item.request.finished,
                          item.request.attended_client
                        );
                      }}
                    >
                      <ServiceContainer>
                        <ServiceProfileContainer>
                          <ServiceProfile
                            source={{
                              uri: item.users.avatar
                                ? item.users.avatar.path
                                : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png",
                            }}
                          />
                          <ServiceImage
                            source={{
                              uri:
                                item.request.servicesuser.service.icon !== null
                                  ? item.request.services.user.service.icon
                                  : "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png",
                            }}
                          />
                        </ServiceProfileContainer>
                        <ServiceOptions>
                          <ServiceTitle>{item.request.title}</ServiceTitle>
                          <ServiceClientName>
                            {item.users.first_name}
                          </ServiceClientName>
                        </ServiceOptions>
                      </ServiceContainer>

                      <ServiceStartedContainer
                        style={
                          item.request.attended === true &&
                          item.request.status === 1 &&
                          item.request.finished === true && {
                            backgroundColor: "#00325a",
                          }
                        }
                      >
                        {item.request.attended === false &&
                        item.request.status === 1 ? (
                          <ServiceStartedIcon source={StartIcon} />
                        ) : (
                          <>
                            {item.request.attended === true &&
                            item.request.status === 1 &&
                            item.request.finished === false ? (
                              <ServiceStartedIcon source={CheckIcon} />
                            ) : (
                              <ServiceStartedIcon source={ChackIcon} />
                            )}
                          </>
                        )}
                      </ServiceStartedContainer>
                    </SubContainerService>
                    <Separator />
                  </>
                ))}
              </>
            )}
          </>
        )}
      </ContainerService>
    );
  }

  console.log(services);

  return (
    <Container>
      <>
        {loadingIntro ? (
          <></>
        ) : (
          <>
            {intro ? (
              <>
                {services.data === "empty" ? (
                  <ContainerNoServices>
                    <TitleNo>Nenhuma solicitação no momento</TitleNo>
                  </ContainerNoServices>
                ) : (
                  <List />
                )}
              </>
            ) : (
              <Tutorial />
            )}
          </>
        )}
      </>
    </Container>
  );
}

export default withNavigationFocus(Services);

/*<ListService
                    data={services}
                    renderItem={({ item }) => <List data={item} />}
                    keyExtractor={item => item.id}
                  />*/
