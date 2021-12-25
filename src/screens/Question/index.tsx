import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { NewText } from '~/components/Text';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { RESULT_SCREEN } from '~/constants/routes';
import type { OptionProps, ResultQuestionProps } from '~/dtos/arrayoption';
import {
  getQuestionQuizAction,
  setQuestionListOldQuizAction,
} from '~/store/ducks/questions/action';
import {
  incrementEasyQuestionAction,
  incrementMediumQuestionAction,
  incrementHardQuestionAction,
} from '~/store/ducks/userQuestions/action';

import { generateOptions, verifyQuestionSequence } from './utils';

import * as S from './styles';

export function Question() {
  const { questionListQuiz, loadingQuestionQuiz, categoryId } = useSelector(
    (state: AplicationState) => state.question,
  );

  const { Colors } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [numberQuestion, setNumberQuestion] = useState(0);
  const [questionCurrent, setQuestionCurrent] = useState(
    {} as ResultQuestionProps,
  );
  const [optionsQuestion, setOptionsQuestion] = useState<OptionProps[]>([]);
  const [optionSelected, setOptionSelected] = useState('');
  const [questionsCorrectedSequence, setQuestionsCorrectedSequence] =
    useState(0);

  const handleSelectedOption = useCallback((option: string) => {
    setOptionSelected(option);
  }, []);

  const incrementCorrectQuestions = useCallback(
    (quantityDirect = 0) => {
      const incrementCorrectDifficulty = questionListQuiz[0].difficulty;

      switch (incrementCorrectDifficulty) {
        case 'easy':
          return dispatch(
            incrementEasyQuestionAction(
              quantityDirect > 0 ? quantityDirect : questionsCorrectedSequence,
            ),
          );
        case 'medium':
          return dispatch(
            incrementMediumQuestionAction(
              quantityDirect > 0 ? quantityDirect : questionsCorrectedSequence,
            ),
          );
        case 'hard':
          return dispatch(
            incrementHardQuestionAction(
              quantityDirect > 0 ? quantityDirect : questionsCorrectedSequence,
            ),
          );
        default:
          return Alert.alert('ERROR', 'Alguma coisa deu errado');
      }
    },
    [questionListQuiz, questionsCorrectedSequence, dispatch],
  );

  const handleNextQuestion = useCallback(() => {
    if (optionSelected === questionListQuiz[numberQuestion].correct_answer) {
      if (questionsCorrectedSequence < 0) {
        setQuestionsCorrectedSequence(1);
      } else {
        setQuestionsCorrectedSequence(questionsCorrectedSequence + 1);
      }
    } else if (questionsCorrectedSequence > 0) {
      incrementCorrectQuestions();
      setQuestionsCorrectedSequence(0);
    } else {
      setQuestionsCorrectedSequence(questionsCorrectedSequence - 1);
    }
    setNumberQuestion(numberQuestion + 1);
  }, [
    incrementCorrectQuestions,
    optionSelected,
    questionListQuiz,
    questionsCorrectedSequence,
    numberQuestion,
  ]);

  const handleSendQuizz = useCallback(() => {
    if (optionSelected === questionListQuiz[numberQuestion].correct_answer) {
      if (questionsCorrectedSequence < 0) {
        incrementCorrectQuestions(1);
      } else {
        incrementCorrectQuestions(questionsCorrectedSequence + 1);
      }
    }

    navigation.navigate(RESULT_SCREEN);
  }, [
    optionSelected,
    questionListQuiz,
    questionsCorrectedSequence,
    numberQuestion,
    incrementCorrectQuestions,
    navigation,
  ]);

  useEffect(() => {
    if (!loadingQuestionQuiz) {
      setQuestionCurrent(questionListQuiz[numberQuestion]);
      setOptionsQuestion(generateOptions(questionListQuiz, numberQuestion));
    }

    navigation.setOptions({
      title: `Questão ${numberQuestion + 1}`,
    });
  }, [questionListQuiz, numberQuestion, navigation, loadingQuestionQuiz]);

  useEffect(() => {
    if (questionsCorrectedSequence === 3 && numberQuestion !== 9) {
      if (questionListQuiz[0].difficulty !== 'hard') {
        const difficulty = verifyQuestionSequence(
          questionsCorrectedSequence,
          questionListQuiz[0].difficulty,
        );

        dispatch(setQuestionListOldQuizAction(questionListQuiz));
        dispatch(getQuestionQuizAction(categoryId, difficulty));
      }

      incrementCorrectQuestions();
      setQuestionsCorrectedSequence(0);
    } else if (questionsCorrectedSequence === -3) {
      if (questionListQuiz[0].difficulty !== 'easy') {
        const difficulty = verifyQuestionSequence(
          questionsCorrectedSequence,
          questionListQuiz[0].difficulty,
        );

        dispatch(setQuestionListOldQuizAction(questionListQuiz));
        dispatch(getQuestionQuizAction(categoryId, difficulty));
      }

      setQuestionsCorrectedSequence(0);
    }
  }, [
    numberQuestion,
    incrementCorrectQuestions,
    questionsCorrectedSequence,
    categoryId,
    questionListQuiz,
    dispatch,
  ]);

  return (
    <S.Container>
      {loadingQuestionQuiz || !questionCurrent ? (
        <S.Indicator size="large" color={Colors.ICON_COLOR_INPUT} />
      ) : (
        <>
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
              <NewText>
                {numberQuestion === 9 ? 'Finalizar' : 'Proxima'}
              </NewText>
            </S.ButtonNavigation>
          </S.ContainerButtons>
        </>
      )}
    </S.Container>
  );
}
