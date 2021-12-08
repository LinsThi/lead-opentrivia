import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import { toogleThemeAction } from '~/store/ducks/themes/action';

import { NewText } from '../Text';

import * as S from './styles';

interface HeaderProps {
  enableNavigation?: boolean;
  headerLogin?: boolean;
  navigation: any;
  options: any;
}

export function Header({
  enableNavigation,
  headerLogin = false,
  navigation,
  options,
}: HeaderProps) {
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  return (
    <S.Container>
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

      <S.ContainerButtons headerLogin={headerLogin}>
        <S.ButtonTheme onPress={() => dispatch(toogleThemeAction())}>
          <S.IconButton name="invert-colors" />
        </S.ButtonTheme>
      </S.ContainerButtons>
    </S.Container>
  );
}
