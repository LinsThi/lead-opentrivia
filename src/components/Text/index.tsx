import React from 'react';
import type { TextProps } from 'react-native';

import * as S from './styles';

interface NewTextProps {
  fontSize?: number;
  fontColor?: string;
}

export function NewText({
  fontSize = 18,
  fontColor,
  children,
  ...rest
}: NewTextProps & TextProps) {
  return (
    <S.Text {...rest} fontSize={fontSize} fontColor={fontColor}>
      {children}
    </S.Text>
  );
}
