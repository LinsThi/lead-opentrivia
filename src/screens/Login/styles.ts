import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerImage = styled.View`
  flex: 0.4;
  justify-content: flex-end;
`;

export const ContainerInput = styled.View`
  flex: 0.3;
  width: 88%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ContainerButton = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

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
