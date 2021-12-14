import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconInputProps {
  name: string;
  iconType?: string;
}

interface TextInputProps {
  iconRight?: string;
  fontSize: number;
}

export const InputWrapper = styled.View`
  margin-bottom: 10px;
`;

export const ContainerInputIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
  border: 1px ${({ theme }) => theme.Colors.BORDER_BUTTON_COLOR};
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
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR_INPUT,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconInputProps>``;

export const InputLogin = styled.TextInput<TextInputProps>`
  width: ${({ iconRight }) => (iconRight ? 90 : 100)}%;
  padding-right: 10px;
  height: 53px;
  color: ${({ theme }) => theme.Colors.INPUT_TEXT_COLOR};
`;

export const Button = styled.TouchableOpacity``;
