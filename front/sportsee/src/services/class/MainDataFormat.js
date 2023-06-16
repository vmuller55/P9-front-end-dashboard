class MainData {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.userInfos.firstName;
        this.lastName = data.userInfos.lastName;
        this.age = data.userInfos.age;
        this.todayScore = data.todayScore || data.score;
        this.calorie = data.keyData.calorieCount;
        this.proteine = data.keyData.proteinCount;
        this.glucide = data.keyData.carbohydrateCount;
        this.lipide = data.keyData.lipidCount;
        this.scorePourcent = this.todayScore * 100
    }
    
}

export {MainData}