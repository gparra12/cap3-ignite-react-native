import React from "react";

import { RFValue } from "react-native-responsive-fontsize";

import CarTypeEnergy from "../../assets/energy.svg";
import CarTypeGasoline from "../../assets/gasoline.svg";

import { Image } from "react-native";

import {
  Container,
  CarDetail,
  Brand,
  CarName,
  CarInfos,
  Infos,
  CarPrice,
  Price,
  InfoWrapper,
} from "./styles";

export function Car() {
  return (
    <Container>
      <CarDetail>
        <CarInfos>
          <Brand>AUDI</Brand>
          <CarName>RS 5 Coupé</CarName>
        </CarInfos>
        <Infos>
          <CarPrice>AO DIA {"\n"}</CarPrice>
          <InfoWrapper>
            <Price>R$ 340</Price>
            {/* <CarTypeEnergy
            width={RFValue(17)}
            height={RFValue(22)}
            color="#AEAEB3"
          /> */}
            <CarTypeGasoline
              width={RFValue(17)}
              height={RFValue(22)}
              color={"#AEAEB3"}
            />
          </InfoWrapper>
        </Infos>
      </CarDetail>
      <Image
        source={require("../../assets/Audi.png")}
        style={{ width: 160, height: 92 }}
      />
    </Container>
  );
}
