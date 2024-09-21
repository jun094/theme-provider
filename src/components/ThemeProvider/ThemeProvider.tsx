import { useEffect, useRef } from "react";

import { ThemeProviderProps } from "./ThemeProvider.types";
import { THEME_INFO } from "./ThemeProvider.constants";
import "../../styles/root.css";

const ThemeProvider = ({
	theme = "cake",
	primary,
	borderRadius,
	typography,
	scaling,
	children,
}: ThemeProviderProps) => {
	const themeContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const rootElement = themeContainerRef.current;

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

		return () => {
			// 컴포넌트가 언마운트될 때 data- 속성 제거
			Object.keys(themeAttributes).forEach((attr) =>
				rootElement.removeAttribute(attr)
			);
		};
	}, [primary, typography, borderRadius, scaling]);

	return (
		<div ref={themeContainerRef} className="holymoly-theme">
			{children}
		</div>
	);
};

export default ThemeProvider;
