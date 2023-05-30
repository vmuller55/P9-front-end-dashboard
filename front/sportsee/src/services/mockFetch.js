import {userMainData, userActivityData, userAverageSessionsData, userPerformanceData } from "../data/mockData"
import { MainData } from "./class/MainDataFormat";
import { ActivityData } from "./class/ActivityDataFormat";
import { PerformanceData } from "./class/PerfomranceDataFormat";
import { AverageSessionsData } from "./class/AverageSessionData";

/**
 * retrieve the mocked data and create a new class
 * @param {number} id 
 * @returns new class data
 */
function getUserMainData(id) {
    const data = userMainData.find(value => value.id.toString() === id);
    const userMain = new MainData(data);
    return userMain;
}

function getUserActivity(id) {
    const data = userActivityData.find (value => value.userId.toString() === id); 
    const userActivity = new ActivityData(data);
    return userActivity;
}

function getUserAverageSessions(id) {
    const data = userAverageSessionsData.find (value => value.userId.toString() === id);
    const userSessions = new AverageSessionsData(data);
    return userSessions;
    ;
}
function getUserPerformance(id) {
    const data = userPerformanceData.find (value => value.userId.toString() === id);
    const userPerformance = new PerformanceData(data);
    return userPerformance;
}

/**
 * retrieve data 
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 */
const getData = async (id, categorie) => {
    switch (categorie) {
        case "activity": return getUserActivity(id);
        case "average-sessions": return getUserAverageSessions(id);
        case "performance": return getUserPerformance(id);

        default: return getUserMainData(id);
    }
}

export default getData