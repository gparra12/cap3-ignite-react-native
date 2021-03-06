import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 120px;
  height: 120px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};

  margin-bottom: 8px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(13)}px;
`;
