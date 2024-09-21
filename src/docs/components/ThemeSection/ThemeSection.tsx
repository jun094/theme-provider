import React from "react";
import cn from "classnames";

import styles from "./ThemeSection.module.css";
import Text from "../../../libs/Text";

type ThemeSectionProps = {
	title: string;
	column?: boolean;
	children: React.ReactNode;
};

const ThemeSection = ({
	title,
	column = false,
	children,
}: ThemeSectionProps) => {
	return (
		<section className={styles.section}>
			<Text typography="heading3" className={styles.title}>
				{title}
			</Text>
			<div className={cn(styles.contents, column && styles.column)}>
				{children}
			</div>
		</section>
	);
};

export default ThemeSection;
