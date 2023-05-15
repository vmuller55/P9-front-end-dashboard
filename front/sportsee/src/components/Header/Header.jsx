import logo from '../../assets/images/logo.png'
import './header.css'


export function Header () {
    return (
        <header>
            <div className='headerBox'>
                <img src={logo} alt={'logo'}></img>
                <nav>
                    <ul className='navLink'>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglage</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
                
            </div>
            
        </header>
    )
}

export default Header