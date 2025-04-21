export const Characters = (imgUrl, name) => {



    return (
        <div className="container">
            <h1>Characters</h1>
            <img src="{imgUrl}" alt="" />
            <p className="{name}</"></p>
            <a href="#" className="btn btn-outline-primary p-1">Learn more!</a>
            <button type="button" className="btn btn-outline-warning fa-regular fa-heart p-2"></button>
        </div>
    )
}

