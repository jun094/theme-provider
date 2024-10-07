import styles from "./ColorBox.module.css";

type ColorBoxProps = {
	color: "blue-500" | "red-400";
	onClick: (color: string) => void;
};

const ColorBox = ({ color, onClick }: ColorBoxProps) => {
	return (
		<button
			style={{
				backgroundColor: `var(--${color})`,
			}}
			className={styles.box}
			onClick={() => onClick(color)}
		/>
	);
};

export default ColorBox;
