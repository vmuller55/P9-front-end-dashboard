import './aside.css'

function Aside({amount, image, alt, unit, description}) {

    return(
        <div className='asideElement'>
            <div className='asideImage'>
                <img src={image} alt={alt} />
            </div>
            <div className='asideText'>
                <p className='asideValue'>{amount + ' ' + unit}</p>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default Aside