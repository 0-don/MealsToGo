import theme from "../infrastructure/theme";

type Theme = typeof theme;

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
