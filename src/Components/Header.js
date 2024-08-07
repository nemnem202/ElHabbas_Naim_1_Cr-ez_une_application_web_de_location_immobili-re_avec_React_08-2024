import Logo from '../assets/Logo'
import '../styles/Layout.scss'

function Header ({page}) {
    return  (
        <header className="Header">
            <Logo/>
            <nav>
                <a className={TestPage('Home', page)} href="/">Acceuil</a>
                <a className={TestPage('APropos', page)} href="/A-Propos">A Propos</a>
            </nav>
        </header>
    )
}

function TestPage(element, page) {
    return element === page ? 'selected' : 'notselected';
}


export default Header