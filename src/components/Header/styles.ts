import styled from 'styled-components/native';

import Icon from '../Icon';
import { NewText } from '../Text';

interface IconProps {
  name: string;
  iconType?: string;
}

interface ContainerProps {
  enableNavigation?: boolean;
}

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.Colors.HEADER_COLOR};
`;

export const ContainerButtons = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const ContainerFont = styled.View`
  flex-direction: row;
`;

export const ContainerHeaderDown = styled.View`
  width: 100%;
  height: 50px;
  padding-top: 5px;

  flex-direction: row;
  align-items: center;
`;

export const ContainerTitle = styled.View<ContainerProps>`
  flex: ${({ enableNavigation }) => (enableNavigation ? 0.8 : 1)};
  margin-left: 10px;
`;

export const ButtonLeft = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ButtonTheme = styled.TouchableOpacity``;

export const RestoreFont = styled(NewText).attrs({
  fontSize: 25,
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.ICON_COLOR};
  margin-right: 20px;
  margin-left: 18px;
`;

export const DecreaseIncreaseFont = styled(NewText).attrs({
  fontSize: 25,
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.ICON_COLOR};
`;

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
