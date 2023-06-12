import './error.css'
import { Link } from 'react-router-dom'

function ErrorPage  () {
    return(
        <div className="errorText">
            <h2>Erreur 404 </h2>
            <Link to='/' style={{textDecoration : 'none'}}><h5> Retour à la page d'acceuil </h5></Link>
        </div>
    )
}

export default ErrorPage