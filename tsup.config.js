import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	format: ["esm"],
	legacyOutput: true, // output 결과물이 '.mjs'로 나오지 않게 함
	splitting: false,
	sourcemap: true,
	clean: true,
	dts: true,
});
