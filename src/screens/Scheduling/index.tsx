import React from "react";

import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import ArrowSvg from "../../assets/arrow.svg";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueContainer,
  DateValue,
  Content,
  Date,
  DateWrapper,
  Footer,
} from "./styles";

export function Scheduling() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={true}>
              <DateValue>28/01/21</DateValue>
            </DateValueContainer>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={true}>
              <DateValue>28/01/21</DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <DateWrapper>
          <MaterialIcons
            name="chevron-left"
            size={30}
            color={theme.colors.text}
          />
          <Date>Julho 2021</Date>
          <MaterialIcons
            name="chevron-right"
            size={30}
            color={theme.colors.text}
          />
        </DateWrapper>
      </Content>

      <Footer>
        <Button color={theme.colors.main} text="Confirmar" />
      </Footer>
    </Container>
  );
}
