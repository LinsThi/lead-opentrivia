import 'styled-components';

type ColorProps = {
  WHITE: string;
  BLACK: string;
  BLUE: string;
  BUTTON_COLOR: string;
  FONT_COLOR: string;
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
