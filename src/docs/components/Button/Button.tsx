import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
	children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
	return <button className={styles.container}>{children}</button>;
};

export default Button;
