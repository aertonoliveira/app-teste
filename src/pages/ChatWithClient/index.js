import React, { useCallback, useState, useEffect, useRef } from "react";
// components
import { ActivityIndicator, Alert } from "react-native";

import {
  Container,
  ServiceContainer,
  ServiceProfile,
  ServiceProfileContainer,
  ServiceImage,
  ServiceOptions,
  ServiceTitle,
  ServiceClientName,
  HeaderContainer,
  HeaderSubContainer,
  HeaderSeparator,
  IconBackContainer,
  IconBack,
  InputMessage,
  SendBudgetContainer,
  SendBudgetText,
  ModalBudgetContainer,
  ModalBudgetSubContainer,
  ModalBudgetSubContainerConfirmed,
  BudgetContainer,
  BudgetTitle,
  BudgetInput,
  BudgetHold,
  ModalBox,
  TitleModalBox,
  SubTitleModalBox,
  ButtonModalBox,
  IconSuccess,
  IconSucessContainer,
} from "./styles";

import Chat from "../Chat";

// modules

import api from "../../services/api";
import { useSelector } from "react-redux";

import { withNavigationFocus } from "@react-navigation/compat";

function ChatWithClient({ route, navigation, isFocused }) {
  const { item } = route.params;

  const first_name = useSelector((state) => state.user.profile.first_name);

  const listRef = useRef();

  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState(true);

  const [text, setText] = useState("");
  const [chatData, setChatData] = useState([]);
  const [total, setTotal] = useState("");
  const [modalBudget, setModalBudget] = useState(false);
  const [budgetConfirmed, setBudgetConfirmed] = useState(false);

  const [messageClient, setMessageClient] = useState([]);

  const [client, setClient] = useState({});

  const provider_id = useSelector((state) => state.user.profile.id);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (isFocused) {
      async function loadData() {
        try {
          const response = await api.get(
            `/chatprovider?request=${item.request.id}&provider=${item.provider_id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setMessageClient(response.data);

          const responseClient = await api.get(
            `/chatmessagesclient?client=${item.requester_id}`
          );

          setClient(responseClient.data);

          setLoading(false);
          setLoadingMessage(false);
          // setTimeout(() => listRef.current.scrollToEnd(), 500);
        } catch (error) {
          console.tron.log(error);
        }
      }

      loadData();
    }
  }, [token, isFocused, item.request.id, item.provider_id, item.requester_id]);

  async function sendMessage() {
    if (text.trim()) {
      const budget = false;
      await sendMessageToDatabase(text.trim(), budget);
      await setChatData([
        ...chatData,
        { me: false, text, id: chatData.length + 1 },
      ]);
      setText("");
      // setTimeout(() => listRef.current.scrollToEnd(), 500);
    }
  }

  async function sendMessageToDatabase(message, budget, total, type) {
    try {
      const Gethour = new Date();
      const hour = `${Gethour.getHours()}:${Gethour.getMinutes()}`;
      await api.post("/messages", {
        from: provider_id,
        to: item.request.requester_id,
        message,
        request_id: item.request_id,
        value: total,
        budget,
        hour,
      });

      if (type === "1") {
        const responseNotification = api.get(
          `/notifications?id=${item.request.requester_id}`,
          {
            message: `Você acaba de receber um novo orçamento de ${first_name}, clique aqui para visualizar`,
          }
        );
      } else {
        const responseNotification = api.get(
          `/notifications?id=${item.request.requester_id}`,
          {
            message: `${first_name} acaba de te mandar uma mensagem, clique aqui para visualizar.`,
          }
        );
      }
    } catch (error) {
      Alert.alert("erro");
      console.log(error);
    }
  }

  function confirmBudget() {
    setBudgetConfirmed(true);
    //setTimeout(() => listRef.current.scrollToEnd(), 500);
  }

  async function handleSubmit(bool) {
    const msg = "Te enviei um orçamento no valor de: R$ " + total;
    const budget = true;
    setModalBudget(bool);
    sendMessageToDatabase(msg, budget, total, "1");

    await setChatData([
      ...chatData,
      { me: true, msg, id: chatData.length + 1 },
    ]);
  }

  return (
    <Container>
      <HeaderContainer>
        <HeaderSubContainer>
          <IconBackContainer onPress={() => navigation.goBack()}>
            <IconBack />
          </IconBackContainer>
          <ServiceContainer>
            {loading ? (
              <></>
            ) : (
              <>
                <ServiceProfileContainer>
                  <ServiceProfile
                    source={{
                      uri: client.avatar
                        ? client.avatar.path
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
              </>
            )}
          </ServiceContainer>
        </HeaderSubContainer>
        <HeaderSeparator />
      </HeaderContainer>

      {loadingMessage ? (
        <ActivityIndicator color="#fff" size="small" />
      ) : (
        <Chat
          data={chatData}
          listRef={listRef}
          id={item.id}
          requester={item.requester_id}
          request={item.request_id}
        />
      )}

      {!total ? (
        <SendBudgetContainer onPress={() => setModalBudget(true)}>
          <SendBudgetText>Enviar orçamento</SendBudgetText>
        </SendBudgetContainer>
      ) : (
        <SendBudgetContainer
          onPress={() => {
            handleSubmit(true);
          }}
        >
          <SendBudgetText>Orçamento: R$ {total}</SendBudgetText>
        </SendBudgetContainer>
      )}

      <HeaderSeparator />
      <InputMessage
        onSubmitEditing={() => sendMessage()}
        value={text}
        onChangeText={(Text) => setText(Text)}
        //  onFocus={() => setTimeout(() => listRef.current.scrollToEnd(), 500)}
      />

      <ModalBudgetContainer visible={modalBudget} transparent>
        {!budgetConfirmed ? (
          <ModalBudgetSubContainer>
            <BudgetContainer>
              <BudgetHold onPress={() => handleSubmit(false)} />
              <BudgetTitle>Quanto deseja cobrar pelo serviço?</BudgetTitle>
              <BudgetInput
                autoFocus
                value={total}
                onChangeText={(text, formated) => setTotal(text)}
                onSubmitEditing={() => confirmBudget()}
              />
            </BudgetContainer>
          </ModalBudgetSubContainer>
        ) : (
          <ModalBudgetSubContainerConfirmed>
            <ModalBox>
              <IconSucessContainer>
                <IconSuccess />
              </IconSucessContainer>
              <TitleModalBox>Concluído!</TitleModalBox>
              <SubTitleModalBox>
                Você será informado caso{" "}
                {client.first_name || client.first_name} aceite o seu orçamento.
              </SubTitleModalBox>

              <ButtonModalBox onPress={() => setModalBudget(false)}>
                Fechar
              </ButtonModalBox>
            </ModalBox>
          </ModalBudgetSubContainerConfirmed>
        )}
      </ModalBudgetContainer>
    </Container>
  );
}

export default withNavigationFocus(ChatWithClient);
