import 'styled-components';

type ColorProps = {
  WHITE: string;
  BLACK: string;
  BLUE: string;
  BACKGROUND: string;
  INPUT_TEXT_COLOR: string;
  PLACEHOLDER_COLOR: string;
  BUTTON_COLOR: string;
  BORDER_BUTTON_COLOR: string;
  FONT_COLOR: string;
  ICON_COLOR: string;
  ICON_COLOR_INPUT: string;
  HEADER_COLOR: string;
};

type SizeProps = {
  FONTSIZE_BUTTON: number;
  FONTSIZE_TEXT: number;
  ICON_SIZE: number;
  ICON_SIZE_FILTER_BAR: number;
  ICON_SIZE_HEADER: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorProps;
    Sizes: SizeProps;
  }
}
