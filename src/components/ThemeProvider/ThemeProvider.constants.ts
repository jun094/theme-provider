import type { ThemeName, ThemeOptions } from "./ThemeProvider.types";

export const THEME_INFO: Record<ThemeName, ThemeOptions> = {
	cake: {
		primary: "blue-500",
		borderRadius: "md",
		scaling: "100",
		typography: "pretandard",
	},
	strawberry: {
		primary: "pink-400",
		borderRadius: "xl",
		scaling: "110",
		typography: "gothic",
	},
};
