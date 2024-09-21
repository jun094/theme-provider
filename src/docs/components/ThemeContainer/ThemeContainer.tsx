import ThemeProvider from "../../../components/ThemeProvider";
import Alert from "../../../libs/Alert";
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

				<ThemeSection title="Alert" column>
					<Alert color="primary">Alert</Alert>
					<Alert color="success">Alert</Alert>
					<Alert color="warning"> Alert</Alert>
					<Alert color="contrast"> Alert</Alert>
					<Alert color="hint"> Alert</Alert>
				</ThemeSection>

				<ThemeSection title="Text" column>
					<Text typography="heading1">Hi! holymoly-theme is awesome</Text>
					<Text typography="heading2">Hi! holymoly-theme is awesome</Text>
					<Text typography="heading3">Hi! holymoly-theme is awesome</Text>
					<Text typography="heading4">Hi! holymoly-theme is awesome</Text>
					<Text typography="heading5">Hi! holymoly-theme is awesome</Text>
					<Text typography="heading6">Hi! holymoly-theme is awesome</Text>
					<Text typography="subtitle1">Hi! holymoly-theme is awesome</Text>
					<Text typography="subtitle2">Hi! holymoly-theme is awesome</Text>
				</ThemeSection>
			</div>
		</ThemeProvider>
	);
};

export default ThemeContainer;
