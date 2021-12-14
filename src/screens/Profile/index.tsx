import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Button } from '~/components/Button';
import Input from '~/components/InputLogin';
import { ModalProduct } from '~/components/Modal';
import Select from '~/components/Select';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { GenderProps } from '~/@types/Entity/Gender';
import { HOME_SCREEN } from '~/constants/routes';
import { updateUserAction } from '~/store/ducks/user/action';
import type { UserProps } from '~/store/ducks/user/types';

import * as S from './styles';

export function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: AplicationState) => state.user);
  const { Colors } = useContext(ThemeContext);

  const [image, setImage] = useState('');
  const [usernameClient, setUsernameClient] = useState('');
  const [genderClient, setGenderClient] = useState({} as GenderProps);
  const [emailClient, setEmailClient] = useState('');
  const [dateBirthDay, setDateBirthDay] = useState('');
  const [passwordClient, setPasswordClient] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      iconLeftType: 'antDesign',
      iconLeftName: 'arrowleft',
    });

    if (currentUser) {
      setImage(currentUser.avatar);
      setUsernameClient(currentUser.username);
      setGenderClient(currentUser.gender);
      setEmailClient(currentUser.email);
      setDateBirthDay(currentUser.dateBirth);
      setPasswordClient(currentUser.password);
    }
  }, [
    navigation,
    currentUser,
    currentUser.username,
    currentUser.gender,
    currentUser.email,
    currentUser.dateBirth,
    currentUser.password,
  ]);

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
    if (currentUser.avatar) {
      setImage(currentUser.avatar);
    }
  }, [currentUser.avatar]);

  const handleUpdateUser = useCallback(() => {
    const userUpdate: UserProps = {
      avatar: image,
      username: usernameClient,
      gender: genderClient,
      dateBirth: dateBirthDay,
      email: emailClient,
      password: passwordClient,
    };
    dispatch(updateUserAction(userUpdate));
    navigation.navigate(HOME_SCREEN);
  }, [
    dispatch,
    usernameClient,
    passwordClient,
    image,
    navigation,
    genderClient,
    dateBirthDay,
    emailClient,
  ]);

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
          placeholder="E-mail"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconType="materialCommunityIcons"
          iconLeft="email"
          value={emailClient}
          onChangeText={setEmailClient}
        />

        <Input
          placeholder="Data de nascimento"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconType="font"
          iconLeft="birthday-cake"
          value={dateBirthDay}
          onChangeText={setDateBirthDay}
        />

        <Select
          title="Selecione o gênero"
          selectedValue={genderClient}
          onValueChange={genderSelected => setGenderClient(genderSelected)}
        />

        <Input
          placeholder="Senha"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="lock"
          value={passwordClient}
          onChangeText={setPasswordClient}
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
