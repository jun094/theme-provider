import Text from "../Text";
import type { AlertProps } from "./Alert.types";
import styles from "./Alert.module.css";

function Alert({ color = "primary", children }: AlertProps) {
	return (
		<div
			role="alert"
			style={{
				backgroundColor: `var(--${color}-transparent-8)`,
				color: `var(--text-${color}-alternative)`,
				border: `1px solid var(--${color})`,
			}}
			className={styles.container}
		>
			<Text typography="subtitle1">{children}</Text>
		</div>
	);
}

export default Alert;
