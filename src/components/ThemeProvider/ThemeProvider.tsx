import { useEffect, useRef } from "react";

import "../../styles/foundation.css";
import { THEMES } from "../../constants/theme";
import { ThemeProviderProps } from "./ThemeProvider.types";

const ThemeProvider = ({ theme = "cake", children }: ThemeProviderProps) => {
	const themeContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const rootElement = themeContainerRef.current;

		if (!rootElement) return;

		// 기존 테마 클래스 제거
		rootElement.classList.remove(...THEMES.map((theme) => `theme-${theme}`));

		// 새로운 테마 클래스 추가
		if (theme) {
			rootElement.classList.add(`theme-${theme}`);
		}

		// 클래스 추가로 .holymoly-design-system 하위에서 적용되도록 설정
		rootElement.classList.add("hm-jun");

		return () => {
			rootElement.classList.remove("hm-jun", `theme-${theme}`);
		};
	}, [theme]);

	return (
		<div ref={themeContainerRef} className="hm-jun">
			{children}
		</div>
	);
};

export default ThemeProvider;
