import styled from 'styled-components/native';

interface ButtonProps {
  color?: string;
  disabled?: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ButtonLogin = styled.TouchableOpacity<ButtonProps>`
  background: ${({ color, disabled, theme }) =>
    disabled ? theme.Colors.BUTTON_DISABLE_COLOR : color};
  width: 200px;
  height: 53px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px
    ${({ theme, disabled }) =>
      disabled
        ? theme.Colors.BUTTON_DISABLE_COLOR
        : theme.Colors.BORDER_BUTTON_COLOR};
`;
