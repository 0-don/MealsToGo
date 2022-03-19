import { colors } from "./colors";
import { fonts, fontSizes, fontWeights } from "./fonts";
import { sizes } from "./sizes";
import { lineHeights, space } from "./spacing";

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export type ThemeType = typeof theme;
