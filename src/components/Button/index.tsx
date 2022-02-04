import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  color?: string;
  text: string;
}

export function Button({ color, text, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title>{text}</Title>
    </Container>
  );
}
