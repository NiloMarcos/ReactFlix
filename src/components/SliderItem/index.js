import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ContainerAll, BannerItem, Title, RateContainer, Rate } from './styles';

export default function SliderItem(){
  return(
    <ContainerAll activeOpacity={0.7}>
      <BannerItem source={{ uri: 'https://assets.b9.com.br/wp-content/uploads/2018/04/0011-1280x720.jpg'}}/>
      
      <Title numberOfLines={1}>Vingadores</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <Rate>9/10</Rate>
      </RateContainer>
    </ContainerAll>
  );
}