import React from "react";
import { StatusBar } from "react-native";
import { BackButton } from "../../components/BackButton";

import { useTheme } from "styled-components";

import { Container, Header, Title, SubTitle } from "./styles";

export function Schedule() {
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
        <Title>Seus agendamentos,{"\n"} estão aqui.</Title>
        <SubTitle></SubTitle>
      </Header>
    </Container>
  );
}
