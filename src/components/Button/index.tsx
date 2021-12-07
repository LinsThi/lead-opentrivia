import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import { NewText } from '../Text';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <S.Container>
      <S.ButtonLogin {...rest} color={color}>
        <NewText>{title}</NewText>
      </S.ButtonLogin>
    </S.Container>
  );
}
