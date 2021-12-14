import React, { useContext } from 'react';
import type { TextInputProps } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';

import * as S from './styles';

interface InputProps {
  iconRight?: string;
  iconLeft?: string;
  iconType?: string;
  iconAction?: () => void;
}

const Input: React.FC<TextInputProps & InputProps> = ({
  iconRight,
  iconLeft,
  iconType,
  iconAction,
  ...rest
}: InputProps) => {
  const { Sizes } = useContext(ThemeContext);
  const { delta } = useSelector((state: AplicationState) => state.font);
  const fontSizeInput = Sizes.FONTSIZE_INPUT;

  return (
    <S.InputWrapper>
      <S.ContainerInputIcon>
        {iconLeft && <S.IconInput iconType={iconType} name={iconLeft} />}
        <S.Container>
          <S.ContainerInput>
            <S.InputLogin
              {...rest}
              iconRight={iconRight}
              fontSize={fontSizeInput + delta}
            />
            {iconRight && (
              <S.Button onPress={() => iconAction && iconAction()}>
                <S.IconInput name={iconRight} />
              </S.Button>
            )}
          </S.ContainerInput>
        </S.Container>
      </S.ContainerInputIcon>
    </S.InputWrapper>
  );
};

export default Input;
