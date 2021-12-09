import styled from 'styled-components/native';

import Icon from '~/components/Icon';

interface IconProps {
  name: string;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerInputImage = styled.View`
  flex: 0.3;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  padding-left: 130px;
  padding-top: 100px;
`;

export const ContainerInputs = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

export const ContainerButtons = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
`;

export const ImageUser = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

export const IconImage = styled(Icon).attrs<IconProps>(({ name, theme }) => ({
  name,
  color: theme.Colors.ICON_COLOR_INPUT,
  size: theme.Sizes.ICON_SIZE_HEADER,
}))<IconProps>``;

export const ButtonImage = styled.TouchableOpacity``;
