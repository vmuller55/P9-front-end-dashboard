import './Dashboard.css'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
/**
 * Use mocked data
 */
import dataUser from '../../services/mockFetch'
/**
 * Use API
 * import dataUser from '../../services/fetch'
 */
import DailyChart from '../userData/daily/Daily'
import UserAverageSessions from '../userData/average/Average'
import RadarChartThree from '../userData/radar/Radar'
import ObjectifChart from '../userData/Objectif/Objectif'
import Aside from '../userData/aside/Aside'
import calorieImage from '../../assets/images/calories.svg'
import proteinImage from '../../assets/images/protein.svg'
import carbsImage from '../../assets/images/carbs.svg'
import fatImage from '../../assets/images/fat.svg'

export function Dashboard() {
    /**
     * useParam to get id
     * useNavigate to handle API error
     * useState to set data
     */
    const {id} = useParams()
    const {categorie} = useParams()
    const navigate = useNavigate()
    const [userMain, setUserMain] = useState()
    const [userActivity, setUserActivity] = useState()
    const [userSessions, setUserSessions] = useState()
    const [userPerformance, setUserPerformance] = useState()

    useEffect(() => {
        dataUser(id,categorie)
            .then(data => {
                if (typeof data !== "undefined") {
                    setUserMain(data)

                    dataUser(id, "activity")
                    .then(data => setUserActivity(data))
                    .catch(error => console.log("erreur activity",error))

                    dataUser(id, "average-sessions")
                    .then(data => setUserSessions(data))
                    .catch(error => console.log("erreur sessions", error))

                    dataUser(id, "performance")
                    .then(data => setUserPerformance(data))
                    .catch(error => console.log("erreur performance", error))
                }else{
                    navigate("/Error")
                }
            })

            .catch(error => console.log("erreur données id", error))
    },
    /**
     * When id, category or location change
     */
    [id, categorie, navigate])
    if (!userMain || !userActivity || !userSessions || !userPerformance) {
        return (
            <div className='noProfil'>
                <h2>Erreur lors du chargement du profil</h2>
                <Link to='/' style={{textDecoration : 'none'}}><h4>Retour à la page d'accueil</h4></Link>
            </div>
        )
    }  
    
    return(
        <div className='wrapperDashboard'>
            <div className='banner'>
                <h1>Bonjour <span className='colorName'>{userMain.firstName}</span></h1>
                <h2>Félicitation : vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className='board'>
                <div className='chartOne'>
                <DailyChart activityData={userActivity.sessions}/>
                </div>
                <div className='aside'>
                    <Aside 
                        amount={userMain.calorie}
                        image={calorieImage} 
                        alt='logo de feu' 
                        unit='Kcal' 
                        description='Calories'
                    />
                    <Aside 
                        amount={userMain.proteine}
                        image={proteinImage} 
                        alt='logo de poulet' 
                        unit='g' 
                        description='Proteine'
                    />
                    <Aside 
                        amount={userMain.glucide}
                        image={carbsImage} 
                        alt='logo de pomme' 
                        unit='g' 
                        description='Glucides'
                    />
                    <Aside 
                        amount={userMain.lipide}
                        image={fatImage} 
                        alt='logo de burger' 
                        unit='g' 
                        description='Lipides'
                    />
                </div>
                <div className='chartTwo'>
                    <UserAverageSessions averageSessionData={userSessions}></UserAverageSessions>
                </div>
                <div className='chartThree'>
                    <RadarChartThree perfData={userPerformance} ></RadarChartThree>
                </div>
                <div className='chartFour'>
                    <ObjectifChart mainData={userMain}></ObjectifChart>
                </div>
            </div>
        </div>
    )
}

export default Dashboard