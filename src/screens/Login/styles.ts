import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.View`
  flex: 0.35;
`;

export const ContainerInput = styled.View`
  flex: 0.25;
  align-items: center;
`;

export const ContainerButton = styled.View``;

export const ImageLogo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background: ${({ theme }) => theme.Colors.BLUE};
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.Sizes.FONTSIZE_TEXT}px;
  color: ${({ theme }) => theme.Colors.WHITE};
`;
