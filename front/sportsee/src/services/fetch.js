import { MainData } from "./class/MainDataFormat";
import { ActivityData } from "./class/ActivityDataFormat";
import { PerformanceData } from "./class/PerfomranceDataFormat";
import { AverageSessionsData } from "./class/AverageSessionData";

const url = 'http://localhost:3000/user';
/**
 * 
 * @param {Number} id 
 * @param {String} categorie 
 * @returns 
 */
const getData = async(id, categorie) => {
    let wichUrl = categorie ? url + `/${id}/${categorie}/` : url + `/${id}`;

    const data = await fetch(wichUrl);

    const dataFetched = await data.json();

    switch(categorie) {
        case 'activity': return new ActivityData(dataFetched.data);
        case 'average-sessions': return new AverageSessionsData(dataFetched.data);
        case 'performance': return new PerformanceData(dataFetched.data);
        default: return new MainData(dataFetched.data);
    }
}

export default getData