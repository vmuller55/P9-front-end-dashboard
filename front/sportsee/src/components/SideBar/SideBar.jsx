import './SideBar.css'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'

export function SideBar() {
    return(
        <div className='sideBarWrapper'>
            <div className="sideBar">
                <ul className="sideBarIcon">
                    <li><img src={icon1} alt='icone méditation'></img></li>
                    <li><img src={icon2} alt='icone nageur'></img></li>
                    <li><img src={icon3} alt='icone vélo'></img></li>
                    <li><img src={icon4} alt='icone musculation'></img></li>
                </ul>
                <h3>Copiryght, SportSee 2020</h3>
            </div>
        </div>
    )
}

export default SideBar