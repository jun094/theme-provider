'use client';

import { useEffect, useRef } from "react";
import cn from "classnames";

import { ThemeProviderProps } from "./ThemeProvider.types";
import { THEME_INFO } from "./ThemeProvider.constants";
import "../../styles/root.css";

const ThemeProvider = ({
	theme = "cake",
	appearance = "light",
	primary,
	borderRadius,
	typography,
	scaling,
	className,
	children,
}: ThemeProviderProps) => {
	const themeContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const rootElement = themeContainerRef.current;
		const htmlElement = document.documentElement;

		if (!rootElement) return;

		const themeAttributes = {
			"data-holymoly-primary": primary || THEME_INFO[theme].primary,
			"data-holymoly-border-radius":
				borderRadius || THEME_INFO[theme].borderRadius,
			"data-holymoly-typography": typography || THEME_INFO[theme].typography,
			"data-holymoly-scaling": scaling || THEME_INFO[theme].scaling,
		};

		// 기존 data- 속성들을 지움
		Object.keys(themeAttributes).forEach((attr) =>
			rootElement.removeAttribute(attr)
		);

		// 새로운 data- 속성 추가
		Object.entries(themeAttributes).forEach(([key, value]) => {
			if (value) rootElement.setAttribute(key, value);
		});

		// <html> 태그에 appearance 속성 추가
		htmlElement.setAttribute("data-holymoly-appearance", appearance);

		return () => {
			// 컴포넌트가 언마운트될 때 data- 속성 제거
			Object.keys(themeAttributes).forEach((attr) =>
				rootElement.removeAttribute(attr)
			);

			// <html> 태그에서 appearance 속성 제거
			htmlElement.removeAttribute("data-holymoly-appearance");
		};
	}, [primary, typography, borderRadius, scaling]);

	return (
		<div ref={themeContainerRef} className={cn("holymoly-theme", className)}>
			{children}
		</div>
	);
};

export default ThemeProvider;
