import ColorBox from "../ColorBox";
import styles from "./ColorPicker.module.css";

type ColorPickerProps = {
	onPick: (color: string) => void;
};

const ColorPicker = ({ onPick }: ColorPickerProps) => {
	return (
		<div className={styles.container}>
			<ColorBox color="blue-500" onClick={onPick} />
			<ColorBox color="red-400" onClick={onPick} />
		</div>
	);
};

export default ColorPicker;
