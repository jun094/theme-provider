import { ReactNode } from "react";
import { SemanticColorTheme } from "../../types/color";

export type AlertColor = Extract<
	SemanticColorTheme,
	"primary" | "success" | "warning" | "contrast" | "hint"
>;

export type AlertProps = {
	color: AlertColor;
	children: ReactNode;
};
