import React from "react";

// components

import { ChatContainer, NoChatContainer, NoChatText } from "./styles";
import ChatComponent from "../../components/ChatComponent";

// modules

function Chats({ data }) {
  if (data[0] === null) {
    return (
      <NoChatContainer>
        <NoChatText>Nenhuma conversa encontrada.</NoChatText>
      </NoChatContainer>
    );
  }
  return (
    <ChatContainer
      data={data}
      renderItem={({ item }) => <ChatComponent data={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  );
}

export default Chats;
