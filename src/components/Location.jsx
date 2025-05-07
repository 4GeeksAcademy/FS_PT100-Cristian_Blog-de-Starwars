import { Link } from "react-router-dom"

export const Location = ({ name, url }) => {

    let aux = url.split('/')
    let id = aux[6]

    const handleFav = () => {
        console.log('click favoritos')
    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card" >
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div className="botones">
                    <Link to={'/region/'+id}
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