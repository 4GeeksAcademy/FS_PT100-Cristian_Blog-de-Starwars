import { useEffect } from "react"
import { useParams } from "react-router-dom"
import contactService from "../services/ContactServices.jsx"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { PokemonCard } from "../components/PokemonCard.jsx";

export const Details = () => {

    const { id } = useParams()
    const { store, dispatch } = useGlobalReducer()

    const getdetails = async () => {
        const resp = await contactService.getOne(id)
        dispatch({ type: 'pokemon_details', payload: resp })
    }
    useEffect(() => {
        getdetails()
    }, [])

    return (
        <div>
            <h3>Name:{store.details?.name}</h3>
            <p>weight: {store.details?.weight}</p>
        </div>
    )
}

