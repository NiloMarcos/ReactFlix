import React from "react";
import { Feather } from '@expo/vector-icons';
import { ContainerAll, MenuButton, Title } from "./styles"; 

import { useNavigation } from '@react-navigation/native';


export default function Header(props){
  
  const navigation = useNavigation();
  
  return(
    <ContainerAll>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={36} color="white"/>
      </MenuButton>
      <Title>{props.title}</Title>
    </ContainerAll>
  );
}