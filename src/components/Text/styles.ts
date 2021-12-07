import styled from 'styled-components/native';

interface TextProps {
  fontSize: number;
}

export const Text = styled.Text<TextProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.Colors.FONT_COLOR};
`;
