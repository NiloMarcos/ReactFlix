import styled from 'styled-components/native';

export const ContainerAll = styled.View`
  flex: 1;
  background-color: #191a30;
`;

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(25, 26, 48, 0.8);
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`;

export const ButtonLink = styled.TouchableOpacity`
  background-color: #e72f49;
  width: 64px;
  height: 64px;
  border-radius: 35px;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 300px;
  right: 15px;
  z-index: 99;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 22px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 8px;
`;

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
`;

export const Rate = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`;

export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
  max-height: 35px;
  min-height: 35px;

`;

export const TitleDescription = styled.Text`
  font-size: 24px;
  color: #FFFFFF;
  font-weight: bold;
  padding-left: 14px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const Description = styled.Text`
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 30px;
  color: #FFF;
  line-height: 20px;
`;