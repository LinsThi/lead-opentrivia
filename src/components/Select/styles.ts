import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconInputProps {
  name: string;
  iconType?: string;
}

export const Container = styled.View`
  width: 77%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

export const ContainerSelect = styled.View`
  flex: 1;
`;

export const LabelSelect = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.Colors.ICON_COLOR_INPUT};
`;

export const SelectPicker = styled(Picker)`
  flex: 1;
`;

export const IconSelect = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR_INPUT,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconInputProps>``;
