import { ReactNode } from "react";

export type ThemeName = "cake" | "strawberry";

export type ThemeOptions = {
	primary?: "blue-500" | "pink-400";
	borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
	scaling?: "90" | "100" | "110";
	typography?: "pretandard" | "gothic";
};

export type ThemeProviderProps = ThemeOptions & {
	theme?: ThemeName;
	children: ReactNode;
};
