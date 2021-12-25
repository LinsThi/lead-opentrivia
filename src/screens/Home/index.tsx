import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { Baseboard } from '~/components/Baseboard';
import { NewText } from '~/components/Text';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { QUESTION_SCREEN } from '~/constants/routes';
import { getQuestionQuizAction } from '~/store/ducks/questions/action';
import { restoreQuestionAction } from '~/store/ducks/userQuestions/action';

import type { CategoryListThemesProps } from './utils';
import { organizeList } from './utils';

import * as S from './styles';

export function Home() {
  const { currentUser } = useSelector((state: AplicationState) => state.user);
  const { categoryListThemes, loadingCategoryThemes } = useSelector(
    (state: AplicationState) => state.category,
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { Colors } = useContext(ThemeContext);

  const [listData, setListData] = useState<CategoryListThemesProps[] | []>([]);

  useEffect(() => {
    navigation.setOptions({
      title: `Bem-vindo(a) ${currentUser.username}`,
    });
  }, [navigation, currentUser.username]);

  useEffect(() => {
    setListData(organizeList(categoryListThemes));
  }, [categoryListThemes]);

  const handleGenerateQuiz = useCallback(
    (idCategory: number) => {
      dispatch(getQuestionQuizAction(idCategory, 'easy'));
      dispatch(restoreQuestionAction());
      navigation.navigate(QUESTION_SCREEN);
    },
    [dispatch, navigation],
  );

  function renderCategory({ item }: any) {
    return (
      <S.ButtonCategory onPress={() => handleGenerateQuiz(item.id)}>
        <S.ContainerCategory>
          <NewText>{item.name}</NewText>
        </S.ContainerCategory>
      </S.ButtonCategory>
    );
  }

  return (
    <S.Container>
      {loadingCategoryThemes ? (
        <S.Indicator
          size="large"
          color={Colors.ICON_COLOR_INPUT}
          style={{ flex: 1 }}
        />
      ) : (
        <S.FlatCategoryList
          data={listData}
          extraData={listData}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderCategory}
          numColumns={2}
        />
      )}

      <S.ContainerBase>
        <Baseboard />
      </S.ContainerBase>
    </S.Container>
  );
}
