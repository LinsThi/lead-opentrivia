import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import Icon from '~/components/Icon';

interface IconProps {
  name: string;
  iconType?: string;
  correct?: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerResult = styled.View`
  flex: 1;
  width: 85%;
  align-items: center;

  border-radius: 10px;
  margin: 30px 0px;

  background: ${({ theme }) => theme.Colors.RESULT_BOX_COLOR};
`;

export const ContainerResultInfo = styled.View`
  width: 70%;
  align-items: center;

  border-radius: 10px;
  margin: 30px 0px;
`;

export const ContainerResultQuantity = styled.View`
  width: 70%;
  align-items: center;

  border-radius: 15px;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerBase = styled.View`
  width: 100%;
  height: 50px;

  background: ${({ theme }) => theme.Colors.HEADER_COLOR};
`;

export const TextScreen = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.Colors.FONT_COLOR};
`;

export const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Icons = styled(Icon).attrs<IconProps>(
  ({ name, iconType, correct, theme }) => ({
    name,
    type: iconType,
    color: correct ? theme.Colors.CONGRATS_COLOR : theme.Colors.FAILED_COLOR,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconProps>``;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
