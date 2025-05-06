import { useEffect } from "react"
import { useParams } from "react-router-dom"
import contactService from "../services/ContactServices.jsx"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Location } from "../components/Location.jsx"

export const Region = () => {

    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()

    const getRegion = async () => {
        const resp = await contactService.getOneRegion(id)
        dispatch({ type: 'pokemon_region', payload: resp })
    }
    useEffect(() => {
        getRegion()
    }, [])

    return (
        <div className="container-details mt-4">
            {store.details?.sprites && (
                <div>
                    <h3>{store.details?.name}</h3>
                    <img src={store.details.sprites.other["official-artwork"].front_default} className="w-25 p-3" />
                </div>
            )}
            <p className="datos">Weight: {store.details?.weight}</p>
        </div>
    );
};