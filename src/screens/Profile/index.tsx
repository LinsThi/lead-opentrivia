import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import { useFormik } from 'formik';
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

import { validationSchema } from './validations/validation';

import * as S from './styles';

interface DataProps {
  usernameClient: string;
  emailClient: string;
  birthdayClient: string;
  genderClient: GenderProps;
  passwordClient: string;
  newPasswordClient: string;
}

export function Profile() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: AplicationState) => state.user);
  const { Colors } = useContext(ThemeContext);

  const [image, setImage] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      iconLeftType: 'antDesign',
      iconLeftName: 'arrowleft',
    });
  }, [navigation]);

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

  const handleUpdateUser = useCallback(
    (data: DataProps) => {
      const userUpdate: UserProps = {
        avatar: image,
        username: data.usernameClient,
        gender: data.genderClient,
        dateBirth: data.birthdayClient,
        email: data.emailClient,
        password: data.newPasswordClient,
      };
      dispatch(updateUserAction(userUpdate));
      navigation.navigate(HOME_SCREEN);
    },
    [dispatch, image, navigation],
  );

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  const { handleSubmit, dirty, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        usernameClient: currentUser.username,
        emailClient: currentUser.email,
        birthdayClient: currentUser.dateBirth,
        genderClient: currentUser.gender,
        passwordClient: currentUser.password,
        newPasswordClient: '',
      },
      validationSchema,
      onSubmit: handleUpdateUser,
      validateOnChange: false,
    });

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
          value={values.usernameClient}
          error={errors.usernameClient}
          onChangeText={handleChange('usernameClient')}
        />

        <Input
          placeholder="E-mail"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconType="materialCommunityIcons"
          iconLeft="email"
          value={values.emailClient}
          error={errors.emailClient}
          onChangeText={handleChange('emailClient')}
        />

        <Input
          placeholder="Data de nascimento"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconType="font"
          iconLeft="birthday-cake"
          value={values.birthdayClient}
          error={errors.birthdayClient}
          onChangeText={handleChange('birthdayClient')}
        />

        <Select
          title="Selecione o gênero"
          selectedValue={values.genderClient}
          onValueChange={genderSelected =>
            setFieldValue('genderClient', genderSelected)
          }
        />

        <Input
          placeholder="Senha"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="lock"
          value={values.passwordClient}
          error={errors.passwordClient}
          onChangeText={handleChange('passwordClient')}
          secureTextEntry={!showPassword}
          iconAction={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />

        <Input
          placeholder="Nova senha"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="lock"
          value={values.newPasswordClient}
          error={errors.newPasswordClient}
          onChangeText={handleChange('newPasswordClient')}
          secureTextEntry={!showNewPassword}
          iconAction={() => setShowNewPassword(!showNewPassword)}
          iconRight={showNewPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInputs>

      <S.ContainerButtons>
        <Button
          title="Atualizar"
          onPress={() => handleSubmit()}
          disabled={!dirty}
          color={Colors.BUTTON_COLOR}
        />
      </S.ContainerButtons>
      <ModalProduct visible={visible} setVisible={setVisible} />
    </S.Container>
  );
}
