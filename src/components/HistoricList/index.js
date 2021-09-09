import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Tipo, IconView, TipoText, ValorText } from './styles';

export default function HistoricList({ data }) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.tipo}>
          <Icon
            name={data.tipo === 'despesa' ? 'arrow-downward' : 'arrow-upward'}
            color="#fff"
            size={20}
          />
          <TipoText>{data.tipo}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>R$ 120</ValorText>
    </Container>
  );
}
