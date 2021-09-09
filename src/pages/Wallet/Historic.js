import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import {
  Container,
  BoxLoading,
  ContainerInf,
  Box,
  BoxDescription,
  BoxInf,
  ExtractInf,
  ExtractDate,
  Line,
  BoxIcon,
  ImageCoin,
  BoxAlignRow,
  BoxAlignColumn,
  ValueInf,
  ValueInf2,
} from "./styles";

import { useSelector } from "react-redux";
import api from "../../services/api";

import CoinIcon from "../../assets/other-icons/ri_coins-line.png";
import CoinIcon2 from "../../assets/other-icons/ri_coins-line2.png";

import { parseISO } from "date-fns";

function Historic() {
  const userId = useSelector((state) => state.user.profile.id);

  const [loading, setLoading] = useState(true);
  const [historics, setHistorics] = useState([]);

  useEffect(() => {
    async function loadHistoric() {
      const response = await api.get(`requestwithdraw?id=${userId}`);

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
                    {item.status === false ? (
                      <Box>
                        <BoxAlignRow>
                          <BoxDescription>
                            <BoxIcon>
                              <ImageCoin source={CoinIcon} />
                              <Line />
                            </BoxIcon>
                            <BoxAlignColumn key={item.id}>
                              <ExtractInf>Saque</ExtractInf>
                              <ValueInf2>R$ {item.value}</ValueInf2>
                            </BoxAlignColumn>
                          </BoxDescription>
                          <ExtractDate>
                            {item.date.slice(8, 10) +
                              "/" +
                              item.date.slice(5, 7) +
                              "/" +
                              item.date.slice(0, 4)}
                          </ExtractDate>
                        </BoxAlignRow>
                      </Box>
                    ) : (
                      <Box>
                        <BoxAlignRow>
                          <BoxDescription>
                            <BoxIcon>
                              <ImageCoin source={CoinIcon2} />
                              <Line />
                            </BoxIcon>
                            <BoxAlignColumn key={item.id}>
                              <ExtractInf>Valor recebido</ExtractInf>
                              <ValueInf>R$ {item.value}</ValueInf>
                            </BoxAlignColumn>
                          </BoxDescription>
                          <ExtractDate>
                            {item.date.slice(8, 10) +
                              "/" +
                              item.date.slice(5, 7) +
                              "/" +
                              item.date.slice(0, 4)}
                          </ExtractDate>
                        </BoxAlignRow>
                      </Box>
                    )}
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

export default Historic;
