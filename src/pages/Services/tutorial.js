import React, { useState } from "react";
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
  ServiceTime,
  SubContainerService,
  Separator,
  ServiceStartedContainer,
  ServiceStartedIcon,
} from "./styles";

// modules

import api from "../../services/api";
import { useSelector } from "react-redux";

import StartIcon from "../../assets/other-icons/bi_play-fill.png";
import ChackIcon from "../../assets/other-icons/chack-2.png";
import CheckIcon from "../../assets/other-icons/bi_check.png";

import { Coachmark } from "../../components/Coachmark";

export default function Tutorial() {
  const userId = useSelector((state) => state.user.profile.id);

  const [services, setServices] = useState([
    {
      id: 1,
      createdAt: "2020-12-12T00:00:00.000Z",
      updatedAt: "2020-12-12T00:00:00.000Z",
      requester_id: 1,
      service_id: 1,
      provider_id: 2,
      request_id: 1,
      request: {
        id: 1,
        title: "teste",
        description: "teste",
        status: 1,
        attended: false,
        attended_client: false,
        finished: false,
        paid: false,
        servicesuser: {
          id: 1,
          service: {
            id: 1,
            icon: null,
          },
        },
      },
      users: {
        id: 1,
        first_name: "Client",
        avatar: null,
      },
    },
  ]);

  const [skip, setSkip] = useState(0);

  async function handleConfirm() {
    await api.put(`/intro-services?id=${userId}`);

    if (skip === 1) {
      setSkip(2);
    }
  }

  async function handleNext() {
    if (skip === 0) {
      setSkip(1);
    } else if (skip === 1) {
      setSkip(2);
    }
  }

  function List({ data }) {
    return (
      <ContainerService>
        <SubContainerService>
          <ServiceContainer>
            <ServiceProfileContainer>
              <ServiceProfile
                source={{
                  uri: "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png",
                }}
              />
              <ServiceImage
                source={{
                  uri: "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png",
                }}
              />
            </ServiceProfileContainer>
            <ServiceOptions>
              <ServiceTitle>Tutorial</ServiceTitle>
              <ServiceClientName>Nome do cliente</ServiceClientName>
            </ServiceOptions>
          </ServiceContainer>
          <ServiceTimeContainer>
            <ServiceTime />
          </ServiceTimeContainer>
          {skip === 0 && (
            <Coachmark autoShow message="Inicie o serviço" onHide={handleNext}>
              <ServiceStartedContainer
                style={{
                  backgroundColor: "#1BA6DD",
                }}
              >
                <ServiceStartedIcon source={StartIcon} />
              </ServiceStartedContainer>
            </Coachmark>
          )}
          {skip === 1 && (
            <Coachmark
              onHide={handleNext}
              autoShow
              message="Clique aqui ao finalizar o serviço."
            >
              <ServiceStartedContainer
                style={{
                  backgroundColor: "#00325a",
                }}
              >
                <ServiceStartedIcon source={CheckIcon} />
              </ServiceStartedContainer>
            </Coachmark>
          )}
          {skip === 2 && (
            <Coachmark
              autoShow
              message="Serviço finalizado!"
              onHide={handleConfirm}
            >
              <ServiceStartedContainer
                style={{
                  backgroundColor: "#00325a",
                }}
              >
                <ServiceStartedIcon source={ChackIcon} />
              </ServiceStartedContainer>
            </Coachmark>
          )}
        </SubContainerService>
        <Separator />
      </ContainerService>
    );
  }

  return (
    <Container>
      <ListService
        data={services}
        renderItem={({ item }) => <List data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
