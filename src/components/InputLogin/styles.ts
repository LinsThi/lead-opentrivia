import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconInputProps {
  name: string;
  iconType?: string;
  iconColor?: string;
}

interface TextInputProps {
  iconRight?: string;
}

export const InputWrapper = styled.View``;

export const ContainerInputIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 14px;
  padding-left: 15px;
`;

export const Container = styled.View`
  padding: 5px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  width: 250px;
  padding: 0 5px;
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, iconColor, theme }) => ({
    name,
    type: iconType,
    color: iconColor,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconInputProps>``;

export const InputLogin = styled.TextInput<TextInputProps>`
  width: ${({ iconRight }) => (iconRight ? 90 : 100)}%;
  padding-right: 10px;
  height: 53px;
`;

export const Button = styled.TouchableOpacity``;
