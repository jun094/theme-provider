import ThemeContainer from "../components/ThemeContainer";

function Home() {
	return (
		<div className="page">
			<ThemeContainer theme="forest" />
			<ThemeContainer theme="cake" />
			<ThemeContainer theme="strawberry" />
		</div>
	);
}

export default Home;
