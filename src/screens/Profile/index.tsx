import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Text } from 'react-native-paper';

import * as S from './styles';

export function Profile() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      iconLeftType: 'antDesign',
      iconLeftName: 'arrowleft',
    });
  }, [navigation]);

  return (
    <S.Container>
      <Text>Olá</Text>
    </S.Container>
  );
}
