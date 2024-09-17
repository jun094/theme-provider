import ThemeProvider from "../components/ThemeProvider";
import Button from "./components/Button";

function App() {
	return (
		<>
			<ThemeProvider theme="cake">
				<Button>Button</Button>
			</ThemeProvider>

			<hr />

			<ThemeProvider theme="strawberry">
				<Button>Button</Button>
			</ThemeProvider>

			<hr />

			<Button>Button</Button>
		</>
	);
}

export default App;
