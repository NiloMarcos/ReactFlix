import React from "react";
import { Feather } from "@expo/vector-icons";
import Header from "../../components/Header";
import { ContainerAll, SearchContainer, Input, SearchButton } from "./styles";

export default function Dashboard() {
  return (
    <ContainerAll>
      <Header title="React Prime" />

      <SearchContainer>
        <Input placeholder="Ex: Vingadores" placeholderTextColor="#DDD" />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>
    </ContainerAll>
  );
}
