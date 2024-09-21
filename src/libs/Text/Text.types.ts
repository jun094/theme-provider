import { HTMLAttributes, ReactNode, Ref, CSSProperties } from "react";
import { TYPOGRAPHY } from "./Text.constants";

export type TypographyValue = (typeof TYPOGRAPHY)[keyof typeof TYPOGRAPHY];

export type TextProps<E extends HTMLElement = HTMLSpanElement> = Omit<
	HTMLAttributes<E>,
	"color"
> & {
	children: ReactNode;
	typography?: TypographyValue;
	style?: CSSProperties;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
	ref?: Ref<E>;
};
