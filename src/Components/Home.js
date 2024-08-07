import Header from './Header'
import Footer from './Footer'
import ImagePresentationCard from './ImagePresentationCard';
import LocationCard from './LocationCard';
import imageSrc from '../assets/e270fc8fc902a1eb738458e7b29c1899.png';
import logements from '../datas/logements.json'
import '../styles/Home.scss'


function Home() {
    return (
    <div className='MainContainer'>
    
    <div className='HeaderPageContent'>

        <div className="Home">
                <Header page={'Home'}/>
                <HomeContent />
            </div>

    </div>        

    <Footer />

    </div>
    )
}

function HomeContent() {
    return (

        <div>
            <ImagePresentationCard image={imageSrc} titre={'Chez vous, partout et ailleurs'}/>
            <div className='GridLocation'>

            {logements.map(logement =>(
                <LocationCard key={logement.id} image={logement.pictures[0]} titre={logement.title}/>
            ))}

            </div>
        </div>

    )
}

export default Home



