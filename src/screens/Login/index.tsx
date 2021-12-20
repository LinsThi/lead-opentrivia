import { useFormik } from 'formik';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Button } from '~/components/Button';
import Input from '~/components/InputLogin';

import { getCategoryThemesAction } from '~/store/ducks/category/action';
import { loginAction } from '~/store/ducks/user/action';

import { validationSchema } from './validations/validation';

import * as S from './styles';

interface DataProps {
  username: string;
  password: string;
}

export function Login() {
  const dispatch = useDispatch();

  const { Colors } = useContext(ThemeContext);

  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(data: DataProps) {
    dispatch(getCategoryThemesAction());
    dispatch(loginAction(data.username, data.password));
  }

  const { handleSubmit, dirty, handleChange, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
    validateOnChange: false,
  });

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
          placeholder="Usuário"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="person"
          iconType="ionicons"
          value={values.username}
          error={errors.username}
          onChangeText={handleChange('username')}
        />
        <Input
          placeholder="Senha"
          placeholderTextColor={Colors.PLACEHOLDER_COLOR}
          iconLeft="lock"
          value={values.password}
          error={errors.password}
          onChangeText={handleChange('password')}
          secureTextEntry={!showPassword}
          iconAction={() => setShowPassword(!showPassword)}
          iconRight={showPassword ? 'eye-off' : 'eye'}
        />
      </S.ContainerInput>

      <S.ContainerButton>
        <Button
          title="Entrar"
          disabled={!dirty}
          onPress={() => handleSubmit()}
          color={Colors.BUTTON_COLOR}
        />
      </S.ContainerButton>
    </S.Container>
  );
}
