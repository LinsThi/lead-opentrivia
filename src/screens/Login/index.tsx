import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';

import Input from '~/components/InputLogin';

import { HOME_SCREEN } from '~/constants/routes';

import * as S from './styles';

export function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
        <Input
          placeholder="Username"
          iconLeft="person"
          iconType="ionicons"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Password"
          iconLeft="lock"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          iconAction={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInput>

      <S.ContainerButton>
        <S.ButtonLogin onPress={() => handleNavigationHome()}>
          <S.TextButton>Entrar</S.TextButton>
        </S.ButtonLogin>
      </S.ContainerButton>
    </S.Container>
  );
}
