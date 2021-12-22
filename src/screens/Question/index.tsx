import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { NewText } from '~/components/Text';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { RESULT_SCREEN } from '~/constants/routes';
import type { OptionProps } from '~/dtos/arrayoption';

import Questions from './mock';
import { generateOptions } from './utils';

import * as S from './styles';

export function Question() {
  const { questionListQuiz } = useSelector(
    (state: AplicationState) => state.question,
  );

  const { Colors } = useContext(ThemeContext);
  const navigation = useNavigation();

  const [numberQuestion, setNumberQuestion] = useState(0);
  const [questionCurrent, setQuestionCurrent] = useState(
    Questions[numberQuestion],
  );
  const [optionsQuestion, setOptionsQuestion] = useState<OptionProps[]>([]);
  const [optionSelected, setOptionSelected] = useState('');
  const [questionsCorrected, setQuestionsCorrected] = useState(0);

  const handleSelectedOption = useCallback((option: string) => {
    setOptionSelected(option);
  }, []);

  const handleNextQuestion = useCallback(() => {
    if (optionSelected === questionListQuiz[numberQuestion].correct_answer) {
      setQuestionsCorrected(questionsCorrected + 1);
    }
    setNumberQuestion(numberQuestion + 1);
  }, [optionSelected, questionListQuiz, questionsCorrected, numberQuestion]);

  const handleSendQuizz = useCallback(() => {
    if (optionSelected === questionListQuiz[numberQuestion].correct_answer) {
      setQuestionsCorrected(questionsCorrected + 1);
    }
    navigation.navigate(RESULT_SCREEN);
  }, [
    optionSelected,
    questionListQuiz,
    questionsCorrected,
    numberQuestion,
    navigation,
  ]);

  useEffect(() => {
    setQuestionCurrent(questionListQuiz[numberQuestion]);

    navigation.setOptions({
      title: `Questão ${numberQuestion + 1}`,
    });
  }, [questionListQuiz, numberQuestion, navigation]);

  useEffect(() => {
    setOptionsQuestion(generateOptions(questionListQuiz, numberQuestion));
  }, [numberQuestion, questionListQuiz]);

  return (
    <S.Container>
      <S.ContainerQuestion showsVerticalScrollIndicator={false}>
        <S.ContainerAsk>
          <S.ContainerAskTitle>
            <NewText fontColor={Colors.QUESTION_COLOR}>
              {numberQuestion + 1}) {questionCurrent.question}
            </NewText>
          </S.ContainerAskTitle>
        </S.ContainerAsk>

        <S.ContainerOptions>
          {optionsQuestion.map(currentOption => {
            return (
              <S.ContainerOptionsMap key={currentOption.value}>
                <NewText fontColor={Colors.QUESTION_COLOR}>
                  {currentOption.item}){' '}
                </NewText>

                <S.ButtonOption
                  onPress={() => handleSelectedOption(currentOption.value)}
                >
                  <NewText
                    fontColor={
                      optionSelected === currentOption.value
                        ? Colors.OPTION_SELECTED_COLOR
                        : Colors.OPTION_NOT_SELECTED_COLOR
                    }
                  >
                    {currentOption.value}
                  </NewText>
                </S.ButtonOption>
              </S.ContainerOptionsMap>
            );
          })}
        </S.ContainerOptions>
      </S.ContainerQuestion>

      <S.ContainerButtons>
        <S.ButtonNavigation
          onPress={() =>
            numberQuestion === 9 ? handleSendQuizz() : handleNextQuestion()
          }
        >
          <NewText>{numberQuestion === 9 ? 'Finalizar' : 'Proxima'}</NewText>
        </S.ButtonNavigation>
      </S.ContainerButtons>
    </S.Container>
  );
}
