import {
	BasicColorBlue,
	BasicColorCyan,
	BasicColorGrape,
	BasicColorGray,
	BasicColorGreen,
	BasicColorLime,
	BasicColorOrange,
	BasicColorPink,
	BasicColorRed,
	BasicColorViolet,
	BasicColorYellow,
	SemanticColorBackground,
	SemanticColorBorder,
	SemanticColorStatus,
	SemanticColorText,
	SemanticColorTheme,
	SemanticColorThemeTransparent,
} from "../types/color";

export const BASIC_COLOR: Record<
	string,
	| BasicColorGray
	| BasicColorRed
	| BasicColorPink
	| BasicColorGrape
	| BasicColorViolet
	| BasicColorBlue
	| BasicColorCyan
	| BasicColorGreen
	| BasicColorLime
	| BasicColorYellow
	| BasicColorOrange
> = {
	"GRAY-000": "gray-000",
	"GRAY-050": "gray-050",
	"GRAY-100": "gray-100",
	"GRAY-200": "gray-200",
	"GRAY-300": "gray-300",
	"GRAY-400": "gray-400",
	"GRAY-500": "gray-500",
	"GRAY-600": "gray-600",
	"GRAY-700": "gray-700",
	"GRAY-800": "gray-800",
	"GRAY-900": "gray-900",
	"GRAY-950": "gray-950",

	"RED-050": "red-050",
	"RED-100": "red-100",
	"RED-200": "red-200",
	"RED-300": "red-300",
	"RED-400": "red-400",
	"RED-500": "red-500",
	"RED-600": "red-600",
	"RED-700": "red-700",
	"RED-800": "red-800",
	"RED-900": "red-900",

	"PINK-050": "pink-050",
	"PINK-100": "pink-100",
	"PINK-200": "pink-200",
	"PINK-300": "pink-300",
	"PINK-400": "pink-400",
	"PINK-500": "pink-500",
	"PINK-600": "pink-600",
	"PINK-700": "pink-700",
	"PINK-800": "pink-800",
	"PINK-900": "pink-900",

	"GRAPE-050": "grape-050",
	"GRAPE-100": "grape-100",
	"GRAPE-200": "grape-200",
	"GRAPE-300": "grape-300",
	"GRAPE-400": "grape-400",
	"GRAPE-500": "grape-500",
	"GRAPE-600": "grape-600",
	"GRAPE-700": "grape-700",
	"GRAPE-800": "grape-800",
	"GRAPE-900": "grape-900",

	"VIOLET-050": "violet-050",
	"VIOLET-100": "violet-100",
	"VIOLET-200": "violet-200",
	"VIOLET-300": "violet-300",
	"VIOLET-400": "violet-400",
	"VIOLET-500": "violet-500",
	"VIOLET-600": "violet-600",
	"VIOLET-700": "violet-700",
	"VIOLET-800": "violet-800",
	"VIOLET-900": "violet-900",

	"BLUE-050": "blue-050",
	"BLUE-100": "blue-100",
	"BLUE-200": "blue-200",
	"BLUE-300": "blue-300",
	"BLUE-400": "blue-400",
	"BLUE-500": "blue-500",
	"BLUE-600": "blue-600",
	"BLUE-700": "blue-700",
	"BLUE-800": "blue-800",
	"BLUE-900": "blue-900",

	"CYAN-050": "cyan-050",
	"CYAN-100": "cyan-100",
	"CYAN-200": "cyan-200",
	"CYAN-300": "cyan-300",
	"CYAN-400": "cyan-400",
	"CYAN-500": "cyan-500",
	"CYAN-600": "cyan-600",
	"CYAN-700": "cyan-700",
	"CYAN-800": "cyan-800",
	"CYAN-900": "cyan-900",

	"GREEN-050": "green-050",
	"GREEN-100": "green-100",
	"GREEN-200": "green-200",
	"GREEN-300": "green-300",
	"GREEN-400": "green-400",
	"GREEN-500": "green-500",
	"GREEN-600": "green-600",
	"GREEN-700": "green-700",
	"GREEN-800": "green-800",
	"GREEN-900": "green-900",

	"LIME-050": "lime-050",
	"LIME-100": "lime-100",
	"LIME-200": "lime-200",
	"LIME-300": "lime-300",
	"LIME-400": "lime-400",
	"LIME-500": "lime-500",
	"LIME-600": "lime-600",
	"LIME-700": "lime-700",
	"LIME-800": "lime-800",
	"LIME-900": "lime-900",

	"YELLOW-050": "yellow-050",
	"YELLOW-100": "yellow-100",
	"YELLOW-200": "yellow-200",
	"YELLOW-300": "yellow-300",
	"YELLOW-400": "yellow-400",
	"YELLOW-500": "yellow-500",
	"YELLOW-600": "yellow-600",
	"YELLOW-700": "yellow-700",
	"YELLOW-800": "yellow-800",
	"YELLOW-900": "yellow-900",

	"ORANGE-050": "orange-050",
	"ORANGE-100": "orange-100",
	"ORANGE-200": "orange-200",
	"ORANGE-300": "orange-300",
	"ORANGE-400": "orange-400",
	"ORANGE-500": "orange-500",
	"ORANGE-600": "orange-600",
	"ORANGE-700": "orange-700",
	"ORANGE-800": "orange-800",
	"ORANGE-900": "orange-900",
};

export const SEMANTIC_COLOR_THEME: Record<string, SemanticColorTheme> = {
	PRIMARY: "primary",
	SECONDARY: "secondary",
	SUCCESS: "success",
	WARNING: "warning",
	DANGER: "danger",
	HINT: "hint",
	CONTRAST: "contrast",
};

export const SEMANTIC_COLOR_THEME_TRANSPARENT: Record<
	string,
	SemanticColorThemeTransparent
> = {
	"PRIMARY-TRANSPARENT-8": "primary-transparent-8",
	"SECONDARY-TRANSPARENT-8": "secondary-transparent-8",
	"SUCCESS-TRANSPARENT-8": "success-transparent-8",
	"WARNING-TRANSPARENT-8": "warning-transparent-8",
	"DANGER-TRANSPARENT-8": "danger-transparent-8",
	"HINT-TRANSPARENT-8": "hint-transparent-8",
	"CONTRAST-TRANSPARENT-8": "contrast-transparent-8",

	"PRIMARY-TRANSPARENT-16": "primary-transparent-16",
	"SECONDARY-TRANSPARENT-16": "secondary-transparent-16",
	"SUCCESS-TRANSPARENT-16": "success-transparent-16",
	"WARNING-TRANSPARENT-16": "warning-transparent-16",
	"DANGER-TRANSPARENT-16": "danger-transparent-16",
	"HINT-TRANSPARENT-16": "hint-transparent-16",
	"CONTRAST-TRANSPARENT-16": "contrast-transparent-16",

	"PRIMARY-TRANSPARENT-24": "primary-transparent-24",
	"SECONDARY-TRANSPARENT-24": "secondary-transparent-24",
	"SUCCESS-TRANSPARENT-24": "success-transparent-24",
	"WARNING-TRANSPARENT-24": "warning-transparent-24",
	"DANGER-TRANSPARENT-24": "danger-transparent-24",
	"HINT-TRANSPARENT-24": "hint-transparent-24",
	"CONTRAST-TRANSPARENT-24": "contrast-transparent-24",

	"PRIMARY-TRANSPARENT-32": "primary-transparent-32",
	"SECONDARY-TRANSPARENT-32": "secondary-transparent-32",
	"SUCCESS-TRANSPARENT-32": "success-transparent-32",
	"WARNING-TRANSPARENT-32": "warning-transparent-32",
	"DANGER-TRANSPARENT-32": "danger-transparent-32",
	"HINT-TRANSPARENT-32": "hint-transparent-32",
	"CONTRAST-TRANSPARENT-32": "contrast-transparent-32",
};

export const SEMANTIC_COLOR_STATUS: Record<string, SemanticColorStatus> = {
	"PRIMARY-HOVER": "primary-hover",
	"SECONDARY-HOVER": "secondary-hover",
	"SUCCESS-HOVER": "success-hover",
	"WARNING-HOVER": "warning-hover",
	"DANGER-HOVER": "danger-hover",
	"HINT-HOVER": "hint-hover",
	"CONTRAST-HOVER": "contrast-hover",

	"PRIMARY-ACTIVE": "primary-active",
	"SECONDARY-ACTIVE": "secondary-active",
	"SUCCESS-ACTIVE": "success-active",
	"WARNING-ACTIVE": "warning-active",
	"DANGER-ACTIVE": "danger-active",
	"HINT-ACTIVE": "hint-active",
	"CONTRAST-ACTIVE": "contrast-active",
};

export const SEMANTIC_COLOR_TEXT: Record<string, SemanticColorText> = {
	"TEXT-PRIMARY": "text-primary",
	"TEXT-SECONDARY": "text-secondary",
	"TEXT-SUCCESS": "text-success",
	"TEXT-WARNING": "text-warning",
	"TEXT-DANGER": "text-danger",
	"TEXT-HINT": "text-hint",
	"TEXT-CONTRAST": "text-contrast",

	"TEXT-PRIMARY-ALTERNATIVE": "text-primary-alternative",
	"TEXT-SECONDARY-ALTERNATIVE": "text-secondary-alternative",
	"TEXT-SUCCESS-ALTERNATIVE": "text-success-alternative",
	"TEXT-WARNING-ALTERNATIVE": "text-warning-alternative",
	"TEXT-DANGER-ALTERNATIVE": "text-danger-alternative",
	"TEXT-HINT-ALTERNATIVE": "text-hint-alternative",
	"TEXT-CONTRAST-ALTERNATIVE": "text-contrast-alternative",

	"TEXT-ALTERNATIVE": "text-alternative",
	"TEXT-NORMAL": "text-normal",
	"TEXT-WHITE": "text-white",
	"TEXT-EXCEPTION": "text-exception",
};

export const SEMANTIC_COLOR_BACKGROUND: Record<
	string,
	SemanticColorBackground
> = {
	"BACKGROUND-NORMAL": "background-normal",
	"BACKGROUND-ALTERNATIVE-01": "background-alternative-01",
	"BACKGROUND-ALTERNATIVE-02": "background-alternative-02",
};

export const SEMANTIC_COLOR_BORDER: Record<string, SemanticColorBorder> = {
	"BORDER-COLOR": "border-color",
	"BORDER-HOVER": "border-hover",
};

export const SEMANTIC_COLOR = {
	...SEMANTIC_COLOR_THEME,
	...SEMANTIC_COLOR_THEME_TRANSPARENT,
	...SEMANTIC_COLOR_STATUS,
	...SEMANTIC_COLOR_TEXT,
	...SEMANTIC_COLOR_BACKGROUND,
	...SEMANTIC_COLOR_BORDER,
};
