import React from "react";

import { StatusBar, useWindowDimensions } from "react-native";
import BrandSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Content,
  Title,
  SubTitle,
  Footer,
  OkayButton,
  OkayButtonText,
} from "./styles";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  function handleNavigateHome() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <BrandSvg width={width} />

      <Content>
        <DoneSvg width={100} height={100} />
        <Title>Carro alugado!</Title>
        <SubTitle>
          Agora você só precisa ir{"\n"}
          até a concessionária da RENTX{"\n"}
          pegar o seu automóvel.
        </SubTitle>
      </Content>
      <Footer>
        <OkayButton onPress={handleNavigateHome}>
          <OkayButtonText>OK</OkayButtonText>
        </OkayButton>
      </Footer>
    </Container>
  );
}
