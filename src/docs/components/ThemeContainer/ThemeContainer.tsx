import ThemeProvider from "../../../components/ThemeProvider";
import Button from "../../../libs/Button";
import Text from "../../../libs/Text";
import ThemeSection from "../ThemeSection";

import styles from "./ThemeContainer.module.css";

type ThemeContainerProps = {
	theme: "cake" | "strawberry";
};

const ThemeContainer = ({ theme }: ThemeContainerProps) => {
	return (
		<ThemeProvider theme={theme}>
			<div className={styles.container}>
				<Text typography="heading1" className={styles.title}>
					테마: {theme}
				</Text>
				<ThemeSection title="Button">
					<Button color="primary">Button</Button>
					<Button color="secondary">Button</Button>
					<Button color="success">Button</Button>
					<Button color="warning"> Button</Button>
					<Button color="danger"> Button</Button>
					<Button color="contrast"> Button</Button>
				</ThemeSection>
			</div>
		</ThemeProvider>
	);
};

export default ThemeContainer;
