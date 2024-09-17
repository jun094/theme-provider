import { ReactNode } from "react";
import { THEMES } from "../../constants/theme";

export type ThemeProviderProps = {
	theme?: (typeof THEMES)[number];
	children: ReactNode;
};
