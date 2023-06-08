import './Dashboard.css'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import dataUser from '../../services/mockFetch'
import Chart from '../userData/daily/Daily'
import CaloriesAside from '../userData/aside/Calories/Calories'
import ProteinAside from '../userData/aside/prot/Protein'
import CarbsAside from '../userData/aside/Carbs/Carbs'
import FatAside from '../userData/aside/fat/Fat'
import UserAverageSessions from '../userData/average/Average'
import RadarChartThree from '../userData/radar/Radar'
import ObjectifChart from '../userData/Objectif/Objectif'

export function Dashboard() {
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
    [id, categorie, navigate])
    if (!userMain || !userActivity || !userSessions || !userPerformance) {
        return null
    }
    return(
        <div>
            <div className='banner'>
                <h1>Bonjour <span className='colorName'>{userMain.firstName}</span></h1>
                <h2>Félicitation : vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className='board'>
                <div className='chartOne'>
                <Chart userActivityData={userActivity.sessions}/>
                </div>
                <div className='aside'>
                    <CaloriesAside amountOfCalories={userMain.calorie}/>
                    <ProteinAside amountOfProtein={userMain.proteine}></ProteinAside>
                    <CarbsAside amountOfCarbs={userMain.glucide}></CarbsAside>
                    <FatAside amountOfFat={userMain.lipide}></FatAside>
                </div>
                <div className='chartTwo'>
                    <UserAverageSessions averageSessionData={userSessions.sessions}></UserAverageSessions>
                </div>
                <div className='chartThree'>
                    <RadarChartThree dataPerformance={userPerformance} ></RadarChartThree>
                </div>
                <div className='chartFour'>
                    <ObjectifChart mainData={userMain}></ObjectifChart>
                </div>
            </div>
        </div>
    )
}

export default Dashboard