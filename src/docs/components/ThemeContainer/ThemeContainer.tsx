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
				<h1 className={styles.title}>테마: {theme}</h1>
				<ThemeSection title="Button">
					<Button color="primary">Button</Button>
					<Button color="secondary">Button</Button>
					<Button color="success">Button</Button>
					<Button color="warning"> Button</Button>
					<Button color="danger"> Button</Button>
					<Button color="contrast"> Button</Button>
				</ThemeSection>

				<ThemeSection title="Alert" column>
					<Alert color="primary">경고문입니다.</Alert>
					<Alert color="success">경고문입니다.</Alert>
					<Alert color="warning"> 경고문입니다.</Alert>
					<Alert color="contrast"> 경고문입니다.</Alert>
					<Alert color="hint"> 경고문입니다.</Alert>
				</ThemeSection>

				<ThemeSection title="Text" column>
					<Text typography="heading1">heading1</Text>
					<Text typography="heading2">heading2</Text>
					<Text typography="heading3">heading3</Text>
					<Text typography="heading4">heading4</Text>
					<Text typography="heading5">heading5</Text>
					<Text typography="heading6">heading6</Text>
					<Text typography="subtitle1">subtitle1</Text>
					<Text typography="subtitle2">subtitle2</Text>
				</ThemeSection>
			</div>
		</ThemeProvider>
	);
};

export default ThemeContainer;
