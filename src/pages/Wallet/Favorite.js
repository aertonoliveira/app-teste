import React, { useEffect, useState, useContext } from "react";
import { ActivityIndicator, Alert } from "react-native";
import {
  Container,
  BoxLoading,
  ContainerInf,
  BoxInf,
  ExtractInf,
  ButtonInf,
  Line,
} from "./styles";

import WalletContext from "./WalletContext";
import { useSelector } from "react-redux";
import api from "../../services/api";

function Favorite() {
  const userId = useSelector((state) => state.user.profile.id);

  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);

  const { amount, total, setBudgetConfirmed } = useContext(WalletContext);

  async function loadAccounts() {
    const response = await api.get(`/accountsproviders?id=${userId}`);

    setAccounts(response.data);

    setLoading(false);
  }

  useEffect(() => {
    loadAccounts();
  }, [loadAccounts]);

  async function handleSubmit(acc) {
    try {
      setLoading(true);

      if (total <= 0) {
        Alert.alert("Por favor, informe um valor para realizar o saque");
        setLoading(false);
        return;
      }

      if (total > amount) {
        Alert.alert(
          "O valor do saque não pode ser maior que o valor disponivel"
        );
        setLoading(false);
        return;
      }

      const dateFn = new Date();

      const responseRequest = await api.post("/requestwithdraw", {
        provider_id: userId,
        account: acc,
        value: parseFloat(total),
        status: 0,
        date:
          dateFn.getMonth() +
          "/" +
          dateFn.getDay() +
          "/" +
          dateFn.getFullYear(),
      });

      if (responseRequest.data.message) {
        Alert.alert(
          "O valor do saque não pode ser maior que o valor disponivel"
        );
        setLoading(false);
        return;
      }

      setBudgetConfirmed(true);
      setLoading(false);
    } catch (error) {
      Alert.alert(
        "Houve um problema ao realizar a solicitação do saque, tente novamente mais tarde"
      );
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading ? (
        <BoxLoading>
          <ActivityIndicator color="#fff" size="large" />
        </BoxLoading>
      ) : (
        <ContainerInf>
          {accounts.map((item) => (
            <>
              <ButtonInf
                key={item.id}
                onPress={() => {
                  handleSubmit(item.id);
                }}
              >
                <ExtractInf>Banco: {item.bank}</ExtractInf>
                <ExtractInf> - Agência: {item.agency}</ExtractInf>
                <ExtractInf> - Conta: {item.account}</ExtractInf>
              </ButtonInf>
              <Line />
            </>
          ))}
        </ContainerInf>
      )}
    </Container>
  );
}

export default Favorite;
