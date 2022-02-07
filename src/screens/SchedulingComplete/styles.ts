import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: 40px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  text-align: center;
  line-height: ${RFValue(25)}px;
  padding-top: 16px;
`;
export const Footer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const OkayButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape_dark};
  width: 80px;
  height: 56px;
  justify-content: center;
  align-items: center;
`;
export const OkayButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;
