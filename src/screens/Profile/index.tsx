import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Button } from '~/components/Button';
import Input from '~/components/InputLogin';
import { ModalProduct } from '~/components/Modal';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { HOME_SCREEN } from '~/constants/routes';
import { updateUserAction } from '~/store/ducks/user/action';

import * as S from './styles';

export function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { avatar, username } = useSelector(
    (state: AplicationState) => state.user,
  );
  const { Colors } = useContext(ThemeContext);

  const [image, setImage] = useState('');
  const [usernameClient, setUsernameClient] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      iconLeftType: 'antDesign',
      iconLeftName: 'arrowleft',
    });

    setUsernameClient(username);
  }, [navigation, username]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (avatar) {
      setImage(avatar);
    }
  }, [avatar]);

  const handleUpdateUser = useCallback(() => {
    dispatch(updateUserAction(usernameClient, password, image));
    navigation.navigate(HOME_SCREEN);
  }, [dispatch, usernameClient, password, image, navigation]);

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  return (
    <S.Container>
      <S.ContainerInputImage>
        <S.ImageUser
          source={{
            uri:
              image ||
              'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg',
          }}
        />

        <S.ContainerIcon>
          <S.ButtonImage onPress={() => showModal()}>
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
          value={usernameClient}
          onChangeText={setUsernameClient}
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
      <ModalProduct visible={visible} setVisible={setVisible} />
    </S.Container>
  );
}
