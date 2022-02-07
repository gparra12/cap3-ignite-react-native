import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useNavigation, CommonActions } from "@react-navigation/native";

import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color: string;
  onPress: () => void;
}

export function BackButton({ color, onPress, ...rest }: Props) {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleGoBack() {
    navigation.dispatch(CommonActions.goBack());
  }
  return (
    <Container onPress={handleGoBack} {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={30}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
}
