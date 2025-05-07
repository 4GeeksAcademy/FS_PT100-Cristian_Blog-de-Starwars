import { Link } from "react-router-dom"
import storeReducer from "../store"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Type = ({ name, url }) => {

    const { store, dispatch } = useGlobalReducer()
    let aux = url.split('/')
    let id = aux[6]
    let isFav = store.favoritos.some(
        e => e.name === name
    )

    const handleFav = () => {
        console.log('click favoritos')
        if (isFav) {
            dispatch({
                type: "deletefavoritos", payload: { name }
            })
        }
        else {
            dispatch({
                type: "addfavoritos", payload: { name }
            })
        }
    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card" >
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div className="botones">
                        <Link to={'/tipos/' + id}
                            className=" btn btn-primary">
                            Learn more
                        </Link>
                        <button type="button" onClick={handleFav} className="btn btn-outline-warning fa-regular fa-heart p-2"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}