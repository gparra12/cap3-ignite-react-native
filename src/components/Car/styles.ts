import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;

  height: ${RFValue(126)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin: 8px 16px;
`;

export const CarDetail = styled.View`
  justify-content: space-between;
`;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};

  text-transform: uppercase;
`;
export const CarName = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const CarInfos = styled.View``;
export const Infos = styled.View``;

export const CarPrice = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  bottom: -13px;
  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  margin-right: 24px;
`;

export const InfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
