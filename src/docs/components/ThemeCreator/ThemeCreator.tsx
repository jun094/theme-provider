import ThemeProvider from "../../../components/ThemeProvider";
import ColorPicker from "../ColorPicker";

import styles from "./ThemeCreator.module.css";

type ThemeCreatorProps = {};

const ThemeCreator = ({}: ThemeCreatorProps) => {
	const handleClickColor = (color: string) => {
		console.log(color);
	};

	return (
		<ul className={styles.container}>
			<li className={styles.section}>
				<label>Primary Color</label>
				<ColorPicker onPick={handleClickColor} />
			</li>
		</ul>
	);
};

export default ThemeCreator;
