class ActivityData {
    constructor(data) {
        this.id = data.userId;
        this.sessions = data.sessions;
        this.day = data.sessions.day;
        this.kilo = data.sessions.kilogram;
        this.calorie = data.sessions.calories;
        this.sessions.map(day => {
            return Object.assign(day, this.getDate(day))
        })
    }

    getDate(day) {
        if(parseInt(day.day.slice(-2)) < 10) {
            return {dayNum : parseInt(day.day.slice(-1))}
        }
        else{
            return {dayNum : parseInt(day.day.slice(-2))}
        }
    }
}

export {ActivityData}