import { useEffect } from "react"
import { useParams } from "react-router-dom"
import contactService from "../services/ContactServices.jsx"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { Type } from "../components/Type.jsx"

export const Tipos = () => {

    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()

    const getTipos = async () => {
        const resp = await contactService.getOneTipos(id)
        dispatch({ type: 'pokemon_tipos', payload: resp })
    }
    useEffect(() => {
        getTipos()
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