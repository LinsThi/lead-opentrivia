import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components/native';

import { NewText } from '~/components/Text';

import type { QuestionsProps } from './mock';
import Questions from './mock';

import * as S from './styles';

export function Question() {
  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [questionCurrent, setQuestionCurrent] = useState(
    Questions[numberQuestion],
  );
  const [optionSelected, setOptionSelected] = useState('');

  const handleSelectedOption = useCallback((option: string) => {
    setOptionSelected(option);
  }, []);

  const handleNextQuestion = useCallback(() => {
    setNumberQuestion(numberQuestion + 1);
  }, [numberQuestion]);

  const handlePreviousQuestion = useCallback(() => {
    setNumberQuestion(numberQuestion - 1);
  }, [numberQuestion]);

  const handleSendQuizz = useCallback(() => {
    console.log('Finalizando Quizz');
  }, []);

  useEffect(() => {
    setQuestionCurrent(Questions[numberQuestion]);
    navigation.setOptions({
      title: `Questão ${numberQuestion + 1}`,
    });
  }, [numberQuestion, navigation]);

  return (
    <S.Container>
      <S.ContainerQuestion showsVerticalScrollIndicator={false}>
        <S.ContainerAsk>
          <S.ContainerAskTitle>
            <NewText fontColor={Colors.QUESTION_COLOR}>
              {questionCurrent.id}) {questionCurrent.question}
            </NewText>
          </S.ContainerAskTitle>
        </S.ContainerAsk>

        <S.ContainerOptions>
          {questionCurrent.options.map(currentQuestion => {
            return (
              <S.ContainerOptionsMap key={currentQuestion.item}>
                <NewText fontColor={Colors.QUESTION_COLOR}>
                  {currentQuestion.item}){' '}
                </NewText>

                <S.ButtonOption
                  onPress={() => handleSelectedOption(currentQuestion.value)}
                >
                  <NewText
                    fontColor={
                      optionSelected === currentQuestion.value
                        ? Colors.OPTION_SELECTED_COLOR
                        : Colors.OPTION_NOT_SELECTED_COLOR
                    }
                  >
                    {currentQuestion.value}
                  </NewText>
                </S.ButtonOption>
              </S.ContainerOptionsMap>
            );
          })}
        </S.ContainerOptions>
      </S.ContainerQuestion>

      <S.ContainerButtons>
        <S.ButtonNavigation
          onPress={() => handlePreviousQuestion()}
          disabled={numberQuestion === 0}
          isDisabled={numberQuestion === 0}
        >
          <NewText>Anterior</NewText>
        </S.ButtonNavigation>

        <S.ButtonNavigation
          onPress={() =>
            numberQuestion === 2 ? handleSendQuizz() : handleNextQuestion()
          }
        >
          <NewText>{numberQuestion === 2 ? 'Finalizar' : 'Proxima'}</NewText>
        </S.ButtonNavigation>
      </S.ContainerButtons>
    </S.Container>
  );
}
