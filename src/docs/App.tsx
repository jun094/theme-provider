import ThemeContainer from "./components/ThemeContainer";
import "./App.css";

function App() {
	return (
		<div>
			<ThemeContainer theme="cake" />

			<hr />

			<ThemeContainer theme="strawberry" />
		</div>
	);
}

export default App;
