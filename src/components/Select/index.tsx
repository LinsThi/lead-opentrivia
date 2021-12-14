import type { PickerProps } from '@react-native-picker/picker';
import { Picker } from '@react-native-picker/picker';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { LIST_GENDERS } from '~/@types/Entity/Gender';

import * as S from './styles';

interface SelectProps {
  title: string;
}

const Select: React.FC<PickerProps & SelectProps> = ({
  title,
  ...rest
}: SelectProps) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.Container
      style={{
        borderWidth: 1,
        borderRadius: 7,
        borderColor: Colors.BORDER_BUTTON_COLOR,
      }}
    >
      <S.IconSelect iconType="feather" name="users" />
      <S.ContainerSelect>
        <S.SelectPicker {...rest} style={{ marginLeft: 10 }}>
          <Picker.Item label={title} value="b" enabled={false} />
          {LIST_GENDERS.map(gender => {
            return (
              <Picker.Item
                label={gender.label}
                value={gender.id}
                key={gender.id}
              />
            );
          })}
        </S.SelectPicker>
      </S.ContainerSelect>
    </S.Container>
  );
};

export default Select;
