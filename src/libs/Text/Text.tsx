import { Ref, forwardRef } from "react";

import cn from "classnames";

import { TYPOGRAPHY } from "./Text.constants";
import styles from "./Text.module.css";
import type { TextProps } from "./Text.types";

function Text<E extends HTMLElement = HTMLSpanElement>(
	{
		as,
		role,
		children,
		className,
		typography = TYPOGRAPHY.BODY1,
		style = {},
		...rest
	}: TextProps<E>,
	ref: Ref<E>
) {
	const Component =
		typography === "code1" || typography === "code2" ? "code" : as ?? "span";

	return (
		<Component
			{...rest}
			ref={ref}
			role={role ?? (Component === "span" ? "text" : undefined)}
			className={cn(styles.text, styles[typography], className)}
			style={{
				...style,
			}}
		>
			{children}
		</Component>
	);
}

export default forwardRef(Text);
