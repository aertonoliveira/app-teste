import React from 'react';

// components

import { Title, SubTitle, ContainerNoServices } from './styles';

// modules

function NoServices() {
  return (
    <ContainerNoServices>
      <Title>Nenhuma solicitação no momento</Title>
      <SubTitle>As solicitações de serviço aparecerão aqui.</SubTitle>
    </ContainerNoServices>
  );
}

export default NoServices;
// Desenvolvido por Hubert Ryan
