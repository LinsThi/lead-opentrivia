import React, { useContext } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { NewText } from '../Text';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
  disabled?: boolean;
}

export function Button({ title, color, disabled, ...rest }: ButtonProps) {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.ButtonLogin {...rest} color={color} disabled={disabled}>
        <NewText fontColor={disabled ? Colors.FONT_DISABLE_COLOR : ''}>
          {title}
        </NewText>
      </S.ButtonLogin>
    </S.Container>
  );
}
