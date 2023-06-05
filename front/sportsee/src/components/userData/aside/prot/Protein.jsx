import './Protein.css'
import ProteinImg from '../../../../assets/images/protein.svg'

function ProteinAside({amountOfProtein}) {
    return(
        <div className='proteinElement'>
            <div className='proteinImage'>
                <img src={ProteinImg} alt="logo Poulet" />
            </div>
            <div className='proteinText'>
                <p className='proteinValue'>{amountOfProtein} g</p>
                <h4>Protéines</h4>
            </div>
        </div>
    )
}

export default ProteinAside