import ThemeProvider from "../components/ThemeProvider";
import Button from "./components/Button";

import "./App.css";

function App() {
	return (
		<>
			<ThemeProvider theme="cake">
				<section>
					<Button>Button</Button>
					<Button color="secondary">Button</Button>
					<Button color="success">Button</Button>
					<Button color="warning"> Button</Button>
				</section>
			</ThemeProvider>

			<hr />

			<ThemeProvider theme="strawberry">
				<section>
					<Button>Button</Button>
					<Button color="secondary">Button</Button>
					<Button color="success">Button</Button>
					<Button color="warning"> Button</Button>
				</section>
			</ThemeProvider>

			<hr />

			<Button>Button</Button>
		</>
	);
}

export default App;
