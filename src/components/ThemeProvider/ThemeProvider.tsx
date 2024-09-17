import { useEffect, useRef } from "react";

import "../../styles/root.css";
import { THEMES } from "../../constants/theme";
import { ThemeProviderProps } from "./ThemeProvider.types";

const ThemeProvider = ({ theme = "cake", children }: ThemeProviderProps) => {
	const themeContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const rootElement = themeContainerRef.current;

		if (!rootElement) return;

		// 기존 data-theme 제거
		THEMES.forEach((theme) => rootElement.removeAttribute("data-hm-jun-theme"));

		// 새로운 data-theme 속성 추가
		if (theme) {
			rootElement.setAttribute("data-hm-jun-theme", theme);
		}

		return () => {
			rootElement.removeAttribute("data-hm-jun-theme");
		};
	}, [theme]);

	return (
		<div ref={themeContainerRef} className="hm-jun">
			{children}
		</div>
	);
};

export default ThemeProvider;
