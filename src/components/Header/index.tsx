import React from 'react';
import { useDispatch } from 'react-redux';

import {
  decrementFontSize,
  incrementFontSize,
  recoveryFontSize,
} from '~/store/ducks/font/action';
import { toogleThemeAction } from '~/store/ducks/themes/action';

import { NewText } from '../Text';

import * as S from './styles';

interface HeaderProps {
  enableNavigation?: boolean;
  navigation: any;
  options: any;
  headerLogin?: boolean;
}

export function Header({
  enableNavigation,
  navigation,
  options,
  headerLogin = false,
}: HeaderProps) {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.ContainerButtons>
        <S.ButtonTheme onPress={() => dispatch(toogleThemeAction())}>
          <S.IconButton iconType="font" name="adjust" />
        </S.ButtonTheme>

        <S.ContainerFont>
          <S.ButtonTheme onPress={() => dispatch(decrementFontSize())}>
            <S.DecreaseIncreaseFont>A-</S.DecreaseIncreaseFont>
          </S.ButtonTheme>

          <S.ButtonTheme onPress={() => dispatch(recoveryFontSize())}>
            <S.RestoreFont>A</S.RestoreFont>
          </S.ButtonTheme>

          <S.ButtonTheme onPress={() => dispatch(incrementFontSize())}>
            <S.DecreaseIncreaseFont>A+</S.DecreaseIncreaseFont>
          </S.ButtonTheme>
        </S.ContainerFont>
      </S.ContainerButtons>

      {!headerLogin && (
        <S.ContainerHeaderDown>
          {enableNavigation && (
            <S.ButtonLeft onPress={() => navigation.goBack()}>
              <S.IconLeft
                iconType={options.iconLeftType}
                name={options.iconLeftName}
              />
            </S.ButtonLeft>
          )}

          <S.ContainerTitle enableNavigation={enableNavigation}>
            <NewText>{options.title}</NewText>
          </S.ContainerTitle>
        </S.ContainerHeaderDown>
      )}
    </S.Container>
  );
}
