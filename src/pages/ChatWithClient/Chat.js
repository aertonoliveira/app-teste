import React, { useEffect, useState } from "react";
import { ScrollView, Alert } from "react-native";

// components

import {
  Container,
  ChatContainer,
  MessageMe,
  MessageNoMe,
  MessageClient,
  // ScrollView,
  BoxTextMsg,
  TextMsg,
} from "./styles";

// modules

import api from "./services/api";
import { useSelector } from "react-redux";
import { withNavigationFocus } from "@react-navigation/compat";

function Chat({ data, listRef, id, requester, request, isFocused }) {
  const provider_id = useSelector((state) => state.user.profile.id);
  const token = useSelector((state) => state.auth.token);

  const [chatData, setChatData] = useState([]);

  console.log(data);

  useEffect(() => {
    if (isFocused) {
      async function loadChat() {
        const getConversationProvider = await api.get(
          `/chatprovider?request=${request}&provider=${provider_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(getConversationProvider.data);

        setChatData(getConversationProvider.data);
      }
      loadChat();
    }
  }, [id, provider_id, requester, token, isFocused, request]);

  return (
    <Container>
      <ScrollView ref={listRef} showsVerticalScrollIndicator={false}>
        <>
          {chatData.map((item) => (
            <>
              {item.from === provider_id ? (
                <>
                  <MessageMe key={item.id}>{item.message}</MessageMe>
                  <>
                    {item.requests.status === -1 && (
                      <MessageMe style={{ backgroundColor: "#EB372B" }}>
                        O orçamento foi recusado
                      </MessageMe>
                    )}
                  </>
                  <>
                    {item.requests.status === 1 && item.accept === true && (
                      <MessageMe style={{ backgroundColor: "#3DB32B" }}>
                        O orçamento foi aceito, e realizado o pagamento de 50%
                        no valor de: {item.value} reais
                      </MessageMe>
                    )}
                  </>
                </>
              ) : (
                <MessageClient key={item.id}>{item.message}</MessageClient>
              )}
            </>
          ))}
        </>
        {data && (
          <BoxTextMsg>
            <TextMsg>Novas mensagens</TextMsg>
          </BoxTextMsg>
        )}
        {data && (
          <>
            {data.map((item) => (
              <>
                {item.from === provider_id ? (
                  <>
                    {item.msg ? (
                      <MessageMe key={item.id}>{item.msg}</MessageMe>
                    ) : (
                      <MessageMe key={item.id}>{item.text}</MessageMe>
                    )}
                  </>
                ) : (
                  <>
                    {item.msg ? (
                      <MessageMe key={item.id}>{item.msg}</MessageMe>
                    ) : (
                      <MessageMe key={item.id}>{item.text}</MessageMe>
                    )}
                  </>
                )}
              </>
            ))}
          </>
        )}
      </ScrollView>
    </Container>
  );
}

export default withNavigationFocus(Chat);
