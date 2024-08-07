function LocationCard({image, titre}) {
    return (
        <div className="LocationCard">
            <div className="ContainerImageLocation">
                <img src={image}></img>
            </div>
            <h2 >{titre}</h2>
        </div>
    )
}

export default LocationCard