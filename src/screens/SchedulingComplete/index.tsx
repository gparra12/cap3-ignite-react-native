import React from "react";

import { StatusBar } from "react-native";
import BrandSvg from "../../assets/brand.svg";

import {
  Container,
  Header,
  Status,
  StatusIndicator,
  RealStatus,
  Title,
  SubTitle,
  Footer,
  OkayButton,
  OkayButtonText,
} from "./styles";
import { useTheme } from "styled-components";

export function SchedulingComplete() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BrandSvg width={1000} height={300} color={theme.colors.text} />
      </Header>
      <Status>
        <StatusIndicator>
          <RealStatus>OK</RealStatus>
        </StatusIndicator>
        <Title>Carro alugado!</Title>
        <SubTitle>
          Agora você só precisa ir{"\n"}
          até a concessionária da RENTX{"\n"}
          pegar o seu automóvel.
        </SubTitle>
      </Status>
      <Footer>
        <OkayButton>
          <OkayButtonText>OK</OkayButtonText>
        </OkayButton>
      </Footer>
    </Container>
  );
}
