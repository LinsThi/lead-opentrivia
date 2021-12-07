import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text } from 'react-native';

import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

export function Login() {
  const navigation = useNavigation();

  function handleNavigationHome() {
    navigation.navigate(HOME_SCREEN);
  }

  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImageLogo
          source={{
            uri: 'https://i.pinimg.com/originals/45/15/d8/4515d8850110fec47af0cd30578420cf.png',
          }}
        />
      </S.ContainerImage>

      <S.ContainerInput>
        <S.InputLogin
          placeholder="Username"
          style={{ borderBottomWidth: 1, marginBottom: 15 }}
        />

        <S.InputLogin placeholder="Senha" style={{ borderBottomWidth: 1 }} />
      </S.ContainerInput>

      <S.ContainerButton>
        <S.ButtonLogin onPress={() => handleNavigationHome()}>
          <Text>Entrar</Text>
        </S.ButtonLogin>
      </S.ContainerButton>
    </S.Container>
  );
}
