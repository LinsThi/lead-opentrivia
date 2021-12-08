import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconProps {
  name: string;
  iconType?: string;
}

interface ContainerProps {
  enableNavigation?: boolean;
  headerLogin?: boolean;
}

export const Container = styled.View`
  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.Colors.HEADER_COLOR};

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.View<ContainerProps>`
  flex: ${({ enableNavigation }) => (enableNavigation ? 0.8 : 1)};
  margin-left: 10px;
`;

export const ContainerButtons = styled.View<ContainerProps>`
  width: ${({ headerLogin }) => (headerLogin ? 100 : 7)}%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonLeft = styled.TouchableOpacity`
  flex: 0.1;
  margin-left: -10px;
`;

export const ButtonTheme = styled.TouchableOpacity``;

export const IconLeft = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR,
    size: theme.Sizes.ICON_SIZE_HEADER,
  }),
)<IconProps>``;

export const IconButton = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR,
    size: theme.Sizes.ICON_SIZE_HEADER,
  }),
)<IconProps>``;
