import { useNavigation } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import { Baseboard } from '~/components/Baseboard';
import { CircleProgress } from '~/components/CircleProgress';
import { NewText } from '~/components/Text';

import * as S from './styles';

export function Result() {
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  const [quantityQuestion, setQuantityQuestion] = useState(7);
  const [textCongrats, setTextCongrats] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'Resultado final',
    });
  }, [navigation]);

  useEffect(() => {
    if (quantityQuestion >= 7) {
      setTextCongrats('PARABÉNS');
    } else {
      setTextCongrats('Poxa...');
    }
  }, [quantityQuestion]);

  return (
    <S.Container>
      <S.ContainerResult style={S.styles.shadow}>
        <S.TextScreen>Quiz resultado</S.TextScreen>
        <S.ContainerImage>
          <S.Image
            source={{
              uri:
                quantityQuestion >= 7
                  ? 'https://emoji.gg/assets/emoji/1238_Trophy.png'
                  : 'https://images.emojiterra.com/google/android-nougat/512px/1f3c5.png',
            }}
          />
        </S.ContainerImage>

        <S.ContainerResultQuantity>
          <NewText
            fontColor={
              quantityQuestion > 6 ? Colors.CONGRATS_COLOR : Colors.FAILED_COLOR
            }
            fontSize={40}
          >
            {textCongrats}
          </NewText>

          <NewText fontSize={20} fontColor={Colors.FONT_RESULT_COLOR}>
            Sua pontuação foi:
          </NewText>

          <S.ContainerQuantity>
            <S.Icons iconType="feather" name="check" correct />
            <NewText fontColor={Colors.INPUT_TEXT_COLOR} fontSize={16}>
              {quantityQuestion} Corretas
            </NewText>

            <S.Icons iconType="evilIcons" name="close" />
            <NewText fontColor={Colors.INPUT_TEXT_COLOR} fontSize={16}>
              {10 - quantityQuestion} Incorretas
            </NewText>
          </S.ContainerQuantity>
        </S.ContainerResultQuantity>

        <S.ContainerGraph>
          <CircleProgress difficulty="Fácil" percent={quantityQuestion * 10} />

          <CircleProgress
            difficulty="Médio"
            percent={quantityQuestion * 10}
            midCircle
          />

          <CircleProgress
            difficulty="Difícil"
            percent={quantityQuestion * 10}
          />
        </S.ContainerGraph>
      </S.ContainerResult>

      <S.ContainerBase>
        <Baseboard />
      </S.ContainerBase>
    </S.Container>
  );
}
