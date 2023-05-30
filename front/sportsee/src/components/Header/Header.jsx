import logo from '../../assets/images/logo.png'
import './header.css'
import { Link } from 'react-router-dom'

export function Header () {
    return (
        <header>
            <div className='headerBox'>
                <Link to={"/"}><img src={logo} alt={'logo'}></img></Link>
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