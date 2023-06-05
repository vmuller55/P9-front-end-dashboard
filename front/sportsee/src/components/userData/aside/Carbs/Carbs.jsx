import './carbs.css'
import CarbsImg from '../../../../assets/images/carbs.svg'

function CarbsAside({amountOfCarbs}) {
    return(
        <div className='carbsElement'>
            <div className='carbsImage'>
                <img src={CarbsImg} alt="logo pomme" />
            </div>
            <div className='carbsText'>
                <p className='carbsValue'>{amountOfCarbs} g</p>
                <h4>Glucides</h4>
            </div>
        </div>
    )
}

export default CarbsAside