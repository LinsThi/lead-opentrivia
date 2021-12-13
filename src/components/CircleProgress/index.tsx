import React, { useContext } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { ThemeContext } from 'styled-components/native';

import { NewText } from '../Text';

interface ProgressCircleProps {
  percent: number;
  difficulty: string;
  midCircle?: boolean;
}

export function CircleProgress({
  percent,
  difficulty,
  midCircle = false,
}: ProgressCircleProps) {
  const { Colors } = useContext(ThemeContext);

  return (
    <ProgressCircle
      percent={percent}
      radius={40}
      borderWidth={4}
      color={Colors.PROGESS_CIRCLE_COLOR}
      shadowColor={Colors.PROGRESS_CIRCLE_SHADOW_COLOR}
      bgColor={Colors.BACKGROUND}
      outerCircleStyle={{
        marginLeft: midCircle ? 15 : 0,
        marginRight: midCircle ? 15 : 0,
      }}
    >
      <NewText fontColor={Colors.PROGESS_CIRCLE_COLOR}>{percent}%</NewText>
      <NewText fontColor={Colors.PROGESS_CIRCLE_COLOR}>{difficulty}</NewText>
    </ProgressCircle>
  );
}
