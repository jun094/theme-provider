import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<main>
			<nav>
				<ul>
					<li>
						<Link to={`/`}>Home</Link>
					</li>
					<li>
						<Link to={`/playground`}>Playground</Link>
					</li>
				</ul>
			</nav>

			<hr />

			<Outlet />
		</main>
	);
}

export default App;
