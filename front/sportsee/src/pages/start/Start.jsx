import './Start.css'
import { Link } from 'react-router-dom'
/**
 * Allow to choose profil
 * @returns 
 */
export function Start(){
    return(
        <div className="choice">
            <h1>Veuillez séléctionner un profil</h1>
            <ul>
                <Link to='/user/12' style={{textDecoration : 'none'}}><li> Karl, le profil 12 </li></Link>
                <Link to='/user/18' style={{textDecoration : 'none'}}><li>Cecilia, le profil 18</li></Link>
            </ul>
        </div>
    )
}

export default Start