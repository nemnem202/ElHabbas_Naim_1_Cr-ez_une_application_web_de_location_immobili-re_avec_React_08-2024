import Header from './Header'
import Footer from './Footer'
import Rating from '../assets/RatingStars.js'



function FicheLogement({index}) {
    return (
<div className='MainContainer'>
    
    <div className='HeaderPageContent'>
        <div>
            <Header />
            <GroupInfo logement={index}/>
        </div>
    </div>        
    
    <Footer />
    
</div>
)
}



function GroupInfo({logement}) {

    return (
        <div className='MainContainerGroupInfo'>
            <div className='ContainerImg'>
                <img src={logement.pictures[0]}></img>
            </div>
            <div>
                <h1>{logement.title}</h1>

                <h2>{logement.location}</h2>

                <h2>{logement.host.name}</h2>

                <div><img src={logement.host.picture}></img></div>

                <div>
                
                    {logement.tags.map(tag =>(
                    <div>{tag}</div>
                    ))}

                </div>

                <div>
                    <h2>Description</h2>
                    <div>{logement.description}</div>
                </div>

                <ul> <h2>Equipements</h2>

                    {logement.equipments.map(equipment =>(
                        <li>{equipment}</li>
                        ))}

                </ul>

                <div>
                    <Rating value={Number(logement.rating)}/>
                </div>
            </div>
        </div>
    )
}

export default FicheLogement



