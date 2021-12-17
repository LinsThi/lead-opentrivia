import styled from 'styled-components/native';

import Icon from '~/components/Icon';

interface IconProps {
  name: string;
}

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
  padding: 0px 5px;
`;

export const ContainerInputImage = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  padding-left: 100px;
  padding-top: 90px;
`;

export const ContainerInputs = styled.View`
  align-items: center;
  margin-top: 30px;
`;

export const ContainerButtons = styled.View`
  align-items: center;
  padding-left: 25%;
  margin: 20px 0px;
`;

export const ImageUser = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100px;
`;

export const IconImage = styled(Icon).attrs<IconProps>(({ name, theme }) => ({
  name,
  color: theme.Colors.ICON_COLOR_INPUT,
  size: theme.Sizes.ICON_SIZE_HEADER,
}))<IconProps>``;

export const ButtonImage = styled.TouchableOpacity``;
