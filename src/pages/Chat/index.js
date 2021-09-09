import React, { useEffect, useState } from "react";

// components

import {
  Container,
  ContainerChats,
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
  NoChatContainer,
  NoChatText,
} from "./styles";
import HeaderDrawer from "../../components/HeaderDrawer";
import { withNavigationFocus } from "@react-navigation/compat";

// modules

import api from "../../services/api";
import { useSelector } from "react-redux";

function Chat({ navigation, isFocused }) {
  const userId = useSelector((store) => store.user.profile.id);

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (isFocused) {
      async function getChats() {
        try {
          const response = await api.get(`/chatmessages?id=${userId}`);
          setDatas(response.data);
        } catch (error) {}
      }
      getChats();
    }
  }, [userId, isFocused]);

  return (
    <Container>
      <HeaderDrawer />
      {datas[0] === null ? (
        <NoChatContainer>
          <NoChatText>Nenhuma conversa encontrada.</NoChatText>
        </NoChatContainer>
      ) : (
        <>
          {datas.map((item) => (
            <ContainerChats
              key={item.id}
              onPress={() => navigation.navigate("ChatWithClient", { item })}
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
                      uri: /*item.request.services.user.service
                ? item.request.services.user.service.icon
                :*/ "https://mltmpgeox6sf.i.optimole.com/w:761/h:720/q:auto/https://redbanksmilesnj.com/wp-content/uploads/2015/11/man-avatar-placeholder.png",
                    }}
                  />
                </ServiceProfileContainer>
                <ServiceOptions>
                  <ServiceTitle>{item.request.description}</ServiceTitle>
                  <ServiceClientName>{item.users.first_name}</ServiceClientName>
                </ServiceOptions>
              </ServiceContainer>
              <ServiceTimeContainer>
                <ServiceTimeCountContainer>
                  <ServiceTime>0</ServiceTime>
                </ServiceTimeCountContainer>
              </ServiceTimeContainer>
            </ContainerChats>
          ))}
        </>
      )}
    </Container>
  );
}

export default withNavigationFocus(Chat);
