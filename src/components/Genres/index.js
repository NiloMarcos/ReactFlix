import React from 'react';

import { ContainerAll, Name } from './styles';

export default function Genres({data}) {
 return (
   <ContainerAll>
     <Name>{data.name}</Name>
   </ContainerAll>
  );
}