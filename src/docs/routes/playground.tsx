import ThemeContainer from "../components/ThemeContainer";
import ThemeCreator from "../components/ThemeCreator/ThemeCreator";

const Playground = () => {
	return (
		<div className="page">
			<ThemeContainer theme="cake" />
			<ThemeCreator />
		</div>
	);
};

export default Playground;
