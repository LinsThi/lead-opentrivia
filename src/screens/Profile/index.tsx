import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Image } from 'react-native';
import reactotron from 'reactotron-react-native';
import { ThemeContext } from 'styled-components/native';

import { Button } from '~/components/Button';
import Input from '~/components/InputLogin';

import * as S from './styles';

export function Profile() {
  const navigation = useNavigation();

  const { Colors } = useContext(ThemeContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      iconLeftType: 'antDesign',
      iconLeftName: 'arrowleft',
    });
  }, [navigation]);

  const handleUpdateUser = useCallback(() => {
    // reactotron.log('Atualizei');
  }, []);

  return (
    <S.Container>
      <S.ContainerInputImage>
        <S.ImageUser
          source={{
            uri: 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg',
          }}
        />

        <S.ContainerIcon>
          <S.ButtonImage>
            <S.IconImage name="pencil" />
          </S.ButtonImage>
        </S.ContainerIcon>
      </S.ContainerInputImage>

      <S.ContainerInputs>
        <Input
          placeholder="Usuário"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="person"
          iconType="ionicons"
          value={username}
          onChangeText={setUsername}
        />

        <Input
          placeholder="Senha"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="lock"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          iconAction={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />

        <Input
          placeholder="Nova senha"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="lock"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!showNewPassword}
          iconAction={() => setShowNewPassword(!showNewPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInputs>

      <S.ContainerButtons>
        <Button
          title="Atualizar"
          onPress={() => handleUpdateUser()}
          color={Colors.BUTTON_COLOR}
        />
      </S.ContainerButtons>
    </S.Container>
  );
}
