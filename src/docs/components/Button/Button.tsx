import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
	color?: "primary" | "secondary" | "success" | "warning";
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
