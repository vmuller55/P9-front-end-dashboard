import './fat.css'
import FatImg from '../../../../assets/images/fat.svg'

function FatAside({amountOfFat}) {
    return(
        <div className='fatElement'>
            <div className='fatImage'>
                <img src={FatImg} alt="logo burger" />
            </div>
            <div className='fatText'>
                <p className='fatValue'>{amountOfFat} g</p>
                <h4>Lipides</h4>
            </div>
        </div>
    )
}

export default FatAside