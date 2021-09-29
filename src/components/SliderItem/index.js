import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ContainerAll, BannerItem, Title, RateContainer, Rate } from './styles';

export default function SliderItem({ data }){
  return(
    <ContainerAll activeOpacity={0.7}>
      <BannerItem source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }}/>
      
      <Title numberOfLines={1}>{data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e" />
        <Rate>{data.vote_average}</Rate>
      </RateContainer>
    </ContainerAll>
  );
}