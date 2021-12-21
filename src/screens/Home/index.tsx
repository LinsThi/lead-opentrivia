import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Baseboard } from '~/components/Baseboard';
import { NewText } from '~/components/Text';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { QUESTION_SCREEN } from '~/constants/routes';
import { getQuestionQuizAction } from '~/store/ducks/questions/action';

import type { CategoryListThemesProps } from './utils';
import { organizeList } from './utils';

import * as S from './styles';

export function Home() {
  const { currentUser } = useSelector((state: AplicationState) => state.user);
  const { categoryListThemes } = useSelector(
    (state: AplicationState) => state.category,
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [numbColumns, setNumbColumns] = useState(2);
  const [categorySelected, setCategorySelected] = useState(0);
  const [listData, setListData] = useState<CategoryListThemesProps[] | []>([]);

  useEffect(() => {
    navigation.setOptions({
      title: `Bem-vindo(a) ${currentUser.username}`,
    });
  }, [navigation, currentUser.username]);

  useEffect(() => {
    setListData(organizeList(categoryListThemes));
  }, [categoryListThemes]);

  const handleSelectCategory = useCallback(
    (idCategory: number) => {
      setCategorySelected(idCategory);
      dispatch(getQuestionQuizAction(categorySelected, 'easy'));
      // navigation.navigate(QUESTION_SCREEN);
    },
    [categorySelected, dispatch, navigation],
  );

  function renderCategory({ item }: any) {
    return (
      <S.ButtonCategory onPress={() => handleSelectCategory(item.id)}>
        <S.ContainerCategory>
          <NewText>{item.name}</NewText>
        </S.ContainerCategory>
      </S.ButtonCategory>
    );
  }

  return (
    <S.Container>
      <S.FlatCategoryList
        data={listData}
        extraData={listData}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderCategory}
        numColumns={numbColumns}
      />

      <S.ContainerBase>
        <Baseboard />
      </S.ContainerBase>
    </S.Container>
  );
}
