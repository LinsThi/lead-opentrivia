import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerList = styled.View``;

export const ContainerCategory = styled.View`
  width: 150px;
  height: 100px;
  justify-content: center;
  align-items: center;

  margin: 7px 20px;
  border-radius: 7px;
  background: ${({ theme }) => theme.Colors.BUTTON_COLOR};
  border: 1px ${({ theme }) => theme.Colors.BORDER_BUTTON_COLOR};
`;

export const ContainerBase = styled.View`
  width: 100%;
  height: 50px;

  background: ${({ theme }) => theme.Colors.HEADER_COLOR};
`;

export const FlatCategoryList = styled.FlatList`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ListCategory = styled.FlatList``;

export const ButtonCategory = styled.TouchableOpacity``;

export const Indicator = styled.ActivityIndicator``;
