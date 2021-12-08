import styled from 'styled-components/native';

interface ButtonProps {
  color?: string;
}

export const Container = styled.View`
  width: 100%;
`;

export const ButtonLogin = styled.TouchableOpacity<ButtonProps>`
  background: ${({ theme, color }) => color || theme.Colors.WHITE};
  width: 200px;
  height: 53px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px ${({ theme }) => theme.Colors.BORDER_BUTTON_COLOR};
`;
