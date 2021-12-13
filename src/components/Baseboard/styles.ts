import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconProps {
  name: string;
  iconType?: string;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const IconPerfil = styled(Icon).attrs<IconProps>(
  ({ theme, name, iconType }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR,
    size: theme.Sizes.ICON_SIZE_HEADER,
  }),
)<IconProps>``;

export const IconLogout = styled(Icon).attrs<IconProps>(
  ({ theme, name, iconType }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR,
    size: theme.Sizes.ICON_SIZE_HEADER,
  }),
)<IconProps>``;
