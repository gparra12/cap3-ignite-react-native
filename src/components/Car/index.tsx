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
import { RectButtonProps } from "react-native-gesture-handler";

interface CarProps {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  type: "fuel" | "eletric";
  carImage: string;
}

interface Props extends RectButtonProps {
  data: CarProps;
}

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CarDetail>
        <CarInfos>
          <Brand>{data.brand}</Brand>
          <CarName>{data.name}</CarName>
        </CarInfos>
        <Infos>
          <CarPrice>
            {data.rent.period} {"\n"}
          </CarPrice>
          <InfoWrapper>
            <Price>R$ {data.rent.price}</Price>
            {data.type === "fuel" ? (
              <CarTypeGasoline
                width={RFValue(17)}
                height={RFValue(22)}
                color={"#AEAEB3"}
              />
            ) : (
              <CarTypeEnergy
                width={RFValue(17)}
                height={RFValue(22)}
                color="#AEAEB3"
              />
            )}
          </InfoWrapper>
        </Infos>
      </CarDetail>
      <Image
        source={{ uri: data.carImage }}
        style={{ width: 250, height: 200 }}
        resizeMode="contain"
      />
    </Container>
  );
}
