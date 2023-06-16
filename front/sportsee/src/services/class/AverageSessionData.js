class AverageSessionsData {
    constructor(data) {
        this.id = data.userId;
        this.sessions = data.sessions;
        this.sessions.map(day => {
            return (
                Object.assign(day, this.addDay(day.day))
                )  
        })
    }
    
    addDay(dayNum) {
            switch (dayNum) {
                case 1: 
                    return {dayLetter : 'D'}   
                case 2: 
                    return {dayLetter : 'L'}      
                case 3: 
                    return {dayLetter : 'M'}  
                case 4: 
                    return {dayLetter : 'M'} 
                case 5: 
                    return {dayLetter : 'J'} 
                case 6: 
                    return {dayLetter : 'V'} 
                case 7: 
                    return {dayLetter : 'S'}  
    
                default: return {dayLetter : ''} 
            }
       
        
    }


}

export {AverageSessionsData}