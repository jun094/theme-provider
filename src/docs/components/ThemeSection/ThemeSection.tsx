import React from "react";
import styles from "./ThemeSection.module.css";
import Text from "../../../libs/Text";

type ThemeSectionProps = {
	title: string;
	children: React.ReactNode;
};

const ThemeSection = ({ title, children }: ThemeSectionProps) => {
	return (
		<section className={styles.section}>
			<Text typography="heading4">{title}</Text>
			<div className={styles.contents}>{children}</div>
		</section>
	);
};

export default ThemeSection;
