import { mainData, activityData, performanceData, averageSessionsData } from "./DataFormat";
const url = 'http://localhost:3000/user';

const getData = async(id, categorie) => {
    let wichUrl = categorie ? url + `/${id}/${categorie}/` : url + `/${id}`;

    const data = await fetch(wichUrl);

    const dataFetched = await data.json();

    switch(categorie) {
        case 'activity': return new activityData(dataFetched.data);
        case 'average-sessions': return new averageSessionsData(dataFetched.data);
        case 'performance': return new performanceData(dataFetched.data);
        default: return new mainData(dataFetched.data);
    }
}

export default getData