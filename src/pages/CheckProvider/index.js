import React from "react";
import { Alert } from "react-native";

// components

import {
  Container,
  BottomContainer,
  Title,
  UserServiceContainer,
  ProfileContainer,
  Profile,
  ProfileUsername,
  Km,
  SubTitle,
  OptionsServiceContainer,
  RejectServiceContainer,
  AcceptServiceContainer,
  AcceptServiceText,
  RejectIcon,
  ServiceImageContainer,
  ServieImage,
  IconAccept,
} from "./styles";

// modules

import api from "../../services/api";
import { useSelector } from "react-redux";

function CheckProvider({ route, navigation }) {
  const { data } = route.params;

  console.log(data);

  const provider_id = useSelector((state) => state.user.profile.id);
  const first_name = useSelector((state) => state.user.profile.first_name);

  async function goBuy() {
    try {
      /*await api.put('/requests', {
        id: data.id,
        provider_id,
      });*/

      const response = await api.post("request-accept", {
        request_id: data.id,
        requester_id: data.requester_id,
        provider_id: provider_id,
        service_id: data.service_id,
      });

      if (response.data.message) {
        Alert.alert("Você já aceitou essa solicitação");
        return;
      }

      const responseNotification = api.get(
        `/notifications?id=${data.requester_id}`,
        {
          message: `O Profissional ${first_name} acaba de aceitar sua solicitação de serviço, negocie com ele`,
        }
      );

      //   navigation.navigate('ChatWithClient', { data });
      navigation.navigate("Chat", { data });
    } catch (error) {
      Alert.alert("Tente novamente", "Houve um error ao tentar negociar");
    }
  }

  return (
    <Container>
      <ServiceImageContainer>
        <ServieImage source={{ uri: data.images }} />
      </ServiceImageContainer>

      <BottomContainer>
        <UserServiceContainer>
          <ProfileContainer>
            <Profile
              source={{
                uri: data.profile,
              }}
            />
            <ProfileUsername>{data.username}</ProfileUsername>
          </ProfileContainer>
          <Km>{data.km}</Km>
        </UserServiceContainer>
        <Title>{data.title}</Title>
        <SubTitle>{data.description}</SubTitle>

        <OptionsServiceContainer>
          <RejectServiceContainer onPress={() => navigation.goBack()}>
            <RejectIcon />
          </RejectServiceContainer>
          <AcceptServiceContainer onPress={() => goBuy()}>
            <AcceptServiceText>Aceitar e negociar</AcceptServiceText>
            <IconAccept />
          </AcceptServiceContainer>
        </OptionsServiceContainer>
      </BottomContainer>
    </Container>
  );
}

export default CheckProvider;
// Desenvolvido por Hubert Ryan
