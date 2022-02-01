import React from "react";

import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Container, Header, TotalCars } from "./styles";

import { Car } from "../../components/Car";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <TotalCars>Total: 12 carros.</TotalCars>
      </Header>
      <Car />
      <Car />
      <Car />
    </Container>
  );
}
