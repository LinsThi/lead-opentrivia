import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { Text } from 'react-native';

import * as S from './styles';

export function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      iconLeftType: 'antDesign',
      iconLeftName: 'arrowleft',
      title: 'Bem-Vinda Mayh',
    });
  }, [navigation]);

  return (
    <S.Container>
      <Text>Ola</Text>
    </S.Container>
  );
}
