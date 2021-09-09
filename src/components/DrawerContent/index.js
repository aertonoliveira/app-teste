/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { signOut } from "./store/modules/auth/actions";

import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  ContainerTop,
  UserInfo,
  AvatarView,
  DetailUser,
  Title,
  Caption,
  DrawerSection,
  DrawerItems,
  AvatarImage,
  AvatarBtn,
} from "./styles";

export function DrawerContent(props) {
  const dispatch = useDispatch();

  const profile = "Ola";

  const isProvider = true;
  // dispatch(signOut());
  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <ContainerTop {...props}>
        <Container>
          <UserInfo>
            <AvatarView>
              <AvatarBtn
                onPress={() => {
                  props.navigation.navigate("Perfil");
                }}
              >
                <AvatarImage
                  source={require("./assets/project/icon/Icon.png")}
                  size={60}
                />
              </AvatarBtn>
              <DetailUser>
                <AvatarBtn
                  onPress={() => {
                    props.navigation.navigate("Perfil");
                  }}
                />
                <Title>{profile}</Title>
                <Caption>Beta </Caption>
              </DetailUser>
            </AvatarView>
          </UserInfo>
          <DrawerSection>
            <DrawerItems
              icon={({ color, size }) => (
                <Icon name="home" color="#FFF" size={size} />
              )}
              label="Home"
              labelStyle={{
                color: "#FFF",
              }}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />

            <DrawerItems
              icon={({ color, size }) => (
                <Icon name="apps" color="#FFF" size={size} />
              )}
              label="Categorias"
              labelStyle={{
                color: "#FFF",
              }}
              onPress={() => {
                props.navigation.navigate("Categorias");
              }}
            />
            {/* <DrawerItems
              icon={({ color, size }) => (
                <Icon name="chat" color="#FFF" size={size} />
              )}
              label="Chat"
              labelStyle={{
                color: '#FFF',
              }}
              onPress={() => {
                props.navigation.navigate('Chat');
              }}
            /> */}
            {isProvider && (
              <DrawerItems
                icon={({ color, size }) => (
                  <Icon
                    name="account-balance-wallet"
                    color="#FFF"
                    size={size}
                  />
                )}
                label="Ganhos"
                labelStyle={{
                  color: "#FFF",
                }}
                onPress={() => {
                  props.navigation.navigate("Ganhos");
                }}
              />
            )}

            <DrawerItems
              icon={({ color, size }) => (
                <Icon name="add-circle-outline" color="#FFF" size={size} />
              )}
              label="Solicitações"
              labelStyle={{
                color: "#FFF",
              }}
              onPress={() => {
                props.navigation.navigate("Solicitações");
              }}
            />
            {isProvider && (
              <DrawerItems
                icon={({ color, size }) => (
                  <Icon name="room-service" color="#FFF" size={size} />
                )}
                label="Meus Serviços"
                labelStyle={{
                  color: "#FFF",
                }}
                onPress={() => {
                  props.navigation.navigate("Meus Serviços");
                }}
              />
            )}

            {!isProvider && (
              <DrawerItems
                icon={({ color, size }) => (
                  <Icon name="room-service" color="#FFF" size={size} />
                )}
                label="Seja Prestador"
                labelStyle={{
                  color: "#FFF",
                }}
                onPress={() => {
                  props.navigation.navigate("Seja Prestador");
                }}
              />
            )}
          </DrawerSection>
        </Container>
      </ContainerTop>
      <DrawerSection>
        <DrawerItems
          icon={({ color, size }) => (
            <Icon name="settings" color="#00325a" size={size} />
          )}
          label="Configurações"
          labelStyle={{
            color: "#00325a",
            fontWeight: "bold",
          }}
          onPress={() => {
            props.navigation.navigate("Perfil");
          }}
        />
        <DrawerItems
          icon={({ color, size }) => (
            <Icon name="info" color="#00325a" size={size} />
          )}
          label="Ajuda"
          labelStyle={{
            color: "#00325a",
            fontWeight: "bold",
          }}
          onPress={() => {
            props.navigation.navigate("Ajuda");
          }}
        />
        <DrawerItems
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color="red" size={size} />
          )}
          label="Sair"
          labelStyle={{ color: "red", fontWeight: "bold" }}
          onPress={handleLogout}
        />
      </DrawerSection>
    </Container>
  );
}
