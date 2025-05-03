import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PokemonCard } from "../components/PokemonCard.jsx";
import { Location } from "../components/Location.jsx";
import { Type } from "../components/Type.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="scroll-horizontal">
			<div className="row">
				<h1>CHARACTERS</h1>
				{store.pokemons?.results?.map((el, i) => <PokemonCard key={i} name={el.name} url={el.url} />)}
				<h1>LOCATION</h1>
				{store.pokemons?.results?.map((el, i) => <Location key={i} name={el.name} url={el.url} />)}
				<h1>TYPES</h1>
				{store.pokemons?.results?.map((el, i) => <Type key={i} name={el.name} url={el.url} />)}
			</div>
		</div>
	);
}; 