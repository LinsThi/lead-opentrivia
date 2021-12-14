import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Button } from '~/components/Button';
import Input from '~/components/InputLogin';

import { loginAction } from '~/store/ducks/user/action';

import * as S from './styles';

export function Login() {
  const dispatch = useDispatch();

  const { Colors } = useContext(ThemeContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleNavigationHome() {
    dispatch(loginAction(username, password));
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
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="person"
          iconType="ionicons"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Password"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="lock"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          iconAction={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInput>

      <S.ContainerButton>
        <Button
          title="Entrar"
          onPress={() => handleNavigationHome()}
          color={Colors.BUTTON_COLOR}
        />
      </S.ContainerButton>
    </S.Container>
  );
}
