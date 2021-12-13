import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  RESULT_SCREEN,
} from '~/constants/routes';
import { logoutAction } from '~/store/ducks/user/action';

import * as S from './styles';

export function Baseboard() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  const handleNavigateResultUser = useCallback(() => {
    navigation.navigate(RESULT_SCREEN);
  }, [navigation]);

  const handleNavigateProfileUser = useCallback(() => {
    navigation.navigate(PROFILE_SCREEN);
  }, [navigation]);

  return (
    <S.Container>
      <S.ButtonIcon onPress={() => handleNavigateProfileUser()}>
        <S.IconPerfil iconType="font" name="user-circle-o" />
      </S.ButtonIcon>

      <S.ButtonIcon onPress={() => handleNavigateResultUser()}>
        <S.IconPerfil name="head-question-outline" />
      </S.ButtonIcon>

      <S.ButtonIcon onPress={() => handleLogout()}>
        <S.IconLogout iconType="antDesign" name="logout" />
      </S.ButtonIcon>
    </S.Container>
  );
}
