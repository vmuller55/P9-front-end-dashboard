import './calories.css'
import CalorieImg from '../../../../assets/images/calories.svg'

function CaloriesAside({amountOfCalories}) {
    return(
        <div className='caloriesElement'>
            <div className='caloriesImage'>
                <img src={CalorieImg} alt="logo feu" />
            </div>
            <div className='caloriesText'>
                <p className='caloriesValue'>{amountOfCalories} Kcal</p>
                <h4>Calories</h4>
            </div>
        </div>
    )
}

export default CaloriesAside