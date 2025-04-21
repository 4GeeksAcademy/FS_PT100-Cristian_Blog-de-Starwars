import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Characters } from "../components/Characters.jsx";
import { Type } from "../components/Type.jsx";
import { Location } from "../components/Location.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container">
			<Characters />
			<Type />
			<Location />
		</div>
	);
}; 