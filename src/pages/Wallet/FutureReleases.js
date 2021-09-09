import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import {
  Container,
  BoxLoading,
  ContainerInf,
  BoxInf,
  ExtractInf,
  Line,
  Box,
  BoxAlignRow,
  BoxDescription,
  BoxIcon,
  ImageCoin,
  BoxAlignColumn,
  ValueInf3,
  ExtractDate,
} from "./styles";
import { useSelector } from "react-redux";
import api from "../../services/api";

import CoinIcon2 from "../../assets/other-icons/ri_coins-line2.png";

function FutureReleases() {
  const userId = useSelector((state) => state.user.profile.id);

  const [loading, setLoading] = useState(true);
  const [historics, setHistorics] = useState([]);

  useEffect(() => {
    async function loadHistoric() {
      const response = await api.get(`getpaymentsall?id=${userId}`);

      setHistorics(response.data);

      setLoading(false);
    }
    loadHistoric();
  }, [userId]);

  return (
    <Container>
      {loading ? (
        <BoxLoading>
          <ActivityIndicator color="#fff" size="small" />
        </BoxLoading>
      ) : (
        <>
          {historics.map((item) => (
            <>
              <ContainerInf>
                <BoxInf>
                  <>
                    <Box>
                      <BoxAlignRow>
                        <BoxDescription>
                          <BoxIcon>
                            <ImageCoin source={CoinIcon2} />
                            <Line />
                          </BoxIcon>
                          <BoxAlignColumn key={item.id}>
                            <ExtractInf>Lançamentos futuros</ExtractInf>
                            <ValueInf3>R$ {item.value}</ValueInf3>
                          </BoxAlignColumn>
                        </BoxDescription>
                        <ExtractDate>Ontem</ExtractDate>
                      </BoxAlignRow>
                    </Box>
                  </>
                </BoxInf>
              </ContainerInf>
            </>
          ))}
        </>
      )}
    </Container>
  );
}

export default FutureReleases;
