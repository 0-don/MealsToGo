import "styled-components";
import { ThemeType } from "../infrastructure/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
