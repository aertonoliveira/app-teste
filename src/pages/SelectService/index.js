import React, { useEffect, useState } from "react";
import { Alert, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import api from "../../services/api";

// actions

import { useDispatch, useSelector } from "react-redux";

import sleep from "../../utils/sleep";

import {
  Container,
  // Banner,
  // CardContainer,
  // Title,
  // ListHorizontal,
  // Categories,
  // SearchView,
  // NameSearch,
  // BtnSearch,
  TitleContainer,
  TitleText,
  Loader,
  LoaderContainer,
  ProAdContainer,
  ProAdSubContainer,
  ProAdTitle,
  ProAdSubTitle,
  ProAdIcon,
  ProAdButton,
  CategoryContainer,
  InputContainer,
  InputItem,
  InputIcon,
  InputIconContainer,
  CategoryItemContainer,
  CategoryItemTitle,
  CategoryItemIcon,
  CategoryGroupContainer,
  ServiceListContainer,
  ServiceSearchItem,
  Category,
  CategoryTitle,
  Line,
  ModalBudgetContainer,
} from "./styles";

export default function SelectService({ navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [getServiceSearch, setGetServiceSearch] = useState("");
  const [search, setSearch] = useState(false);
  const [servicesListData, setServicesListData] = useState([]);

  const [openModal, setOpenModal] = useState(true);

  const userData = useSelector((state) => state.user.profile);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });

    if (getServiceSearch === "") {
      async function loadServices() {
        try {
          const response = await api.get("/services");

          console.log(response.data.services);

          setServicesListData(response.data.services);
          setLoading(false);
        } catch (error) {
          Alert.alert(
            "Não foi possível carregar os serviços, tente novamente mais tarde"
          );
        }
      }

      loadServices();
    }
  }, [getServiceSearch]);

  useEffect(() => {
    if (getServiceSearch !== "") {
      sleep(500);
      setSearch(false);
      try {
        async function loadServiceSearch() {
          setLoading(true);

          const response = await api.get(
            `/services/search/${getServiceSearch}`
          );

          if (response.data.error === "Nenhum registro encontrado!") {
            setLoading(false);
            return;
          }

          setServicesListData(response.data);
          setSearch(true);
          setLoading(false);
        }

        loadServiceSearch();
      } catch (error) {
        setLoading(false);
        setSearch(true);
      }
    }
  }, [getServiceSearch]);

  async function handleSaveService(id) {
    async function saveService() {
      try {
        const response = await api.post("providersservices", {
          service_id: id,
        });

        setOpenModal(false);
        navigation.navigate("SendDocuments", { data: userData });
      } catch (error) {
        Alert.alert(
          "Ocorreu um erro ao tentar gravar o serviço, tente novamente mais tarde"
        );
      }
    }

    saveService();
  }

  return (
    <ModalBudgetContainer visible={openModal} transparent>
      <Container>
        <TitleContainer>
          <TitleText>Qual a sua profissão?</TitleText>
        </TitleContainer>

        {loading ? (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <>
            <InputContainer>
              <InputItem
                value={getServiceSearch}
                onChangeText={(text) => setGetServiceSearch(text)}
              />
              <InputIconContainer>
                <InputIcon />
              </InputIconContainer>
            </InputContainer>

            <CategoryContainer>
              {search ? (
                <>
                  {servicesListData.map((item) => (
                    <>
                      <Category
                        onPress={() => {
                          handleSaveService(item.id);
                        }}
                      >
                        <CategoryTitle>{item.name}</CategoryTitle>
                      </Category>
                      <Line />
                    </>
                  ))}
                </>
              ) : (
                <>
                  {servicesListData.map((item) => (
                    <>
                      <Category
                        key={item.id}
                        onPress={() => {
                          handleSaveService(item.id);
                        }}
                      >
                        <CategoryTitle>{item.name}</CategoryTitle>
                      </Category>
                      <Line />
                    </>
                  ))}
                </>
              )}
            </CategoryContainer>
          </>
        )}
      </Container>
    </ModalBudgetContainer>
  );
}
