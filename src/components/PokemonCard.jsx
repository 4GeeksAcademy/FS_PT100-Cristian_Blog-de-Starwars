import { Link } from "react-router-dom"


export const PokemonCard = (name, url) => {

    const handleFav = () => {
        console.log('click favoritos')
    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card" style="width: 18rem;">
                <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{url}</p>
                    <Link to={'/details/' + id}
                        className=" btn btn-primary">
                        Learn more
                    </Link>
                    <button type="button" onClick={handleFav} className="btn btn-outline-warning fa-regular fa-heart p-2"></button>
                </div>
            </div>
        </div>
    )
}