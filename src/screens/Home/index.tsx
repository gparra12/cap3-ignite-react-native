import React from "react";

import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Container, Header, TotalCars, CarList } from "./styles";

import { Car } from "../../components/Car";

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

export function Home() {
  const navigation = useNavigation<any>();

  const CarData: CarProps = {
    brand: "audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 5000,
    },
    type: "eletric",
    carImage:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/2c980e83-cc83-4ec9-b816-4c857217ada7/3ff00fcf-76a9-44c1-9542-64607a5d8529.png",
  };

  function handleNavigateCarDetails() {
    navigation.navigate("CarDetails");
  }

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
      <CarList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={CarData} onPress={handleNavigateCarDetails} />
        )}
      />
    </Container>
  );
}
