import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

interface ButtonProps {
  isDisabled?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
  align-items: center;
`;

export const ContainerQuestion = styled.ScrollView``;

export const ContainerAsk = styled.View``;

export const ContainerOptions = styled.View`
  width: ${width - 45}px;
`;

export const ContainerOptionsMap = styled.View`
  flex-direction: row;
`;

export const ContainerAskTitle = styled.View`
  padding: 5px;
  margin-bottom: 10px;
  width: ${width - 45}px;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  height: 70px;
  padding: 12px 30px;

  flex-direction: row;
  justify-content: center;
`;

export const ButtonOption = styled.TouchableOpacity`
  margin-bottom: 5px;
`;

export const ButtonNavigation = styled.TouchableOpacity<ButtonProps>`
  padding: 5px 5px;
  justify-content: center;
  border: 1px
    ${({ isDisabled, theme }) =>
      isDisabled
        ? theme.Colors.BUTTON_DISABLE_COLOR
        : theme.Colors.BORDER_BUTTON_COLOR};
  border-radius: 10px;
  background: ${({ isDisabled, theme }) =>
    isDisabled ? theme.Colors.BUTTON_DISABLE_COLOR : theme.Colors.BUTTON_COLOR};
`;

export const Indicator = styled.ActivityIndicator``;
