import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./routes/home";
import Playground from "./routes/playground";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="playground" element={<Playground />} />
				</Route>
			</Routes>
		</Router>
	</StrictMode>
);
