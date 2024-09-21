import React from "react";
import styles from "./Button.module.css";
import { SemanticColorTheme } from "../../types/color";

type ButtonProps = {
	color?: Extract<
		SemanticColorTheme,
		"primary" | "secondary" | "success" | "warning" | "danger" | "contrast"
	>;
	children: React.ReactNode;
};

const Button = ({ color = "primary", children }: ButtonProps) => {
	return (
		<button
			data-hm-jun-color={color}
			className={styles.container}
			style={{
				backgroundColor: `var(--${color})`,
			}}
		>
			{children}
		</button>
	);
};

export default Button;
