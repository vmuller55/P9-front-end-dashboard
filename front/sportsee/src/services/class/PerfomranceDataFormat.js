class PerformanceData {
    constructor(data) {
        this.data = data.data
        this.kind = data.kind
        this.data.map(kind => {
            return Object.assign(kind, this.addType(kind.kind))
        }) 
    }

    addType(kind) {
        switch (kind) {
            case 1: 
                return {type : "Cardio"}
            case 2: 
                return {type : "Energie"}
            case 3: 
                return {type : "Endurance"}
            case 4: 
                return {type : "Force"}
            case 5: 
                return {type : "Vitesse"}
            case 6: 
                return {type : "Intensité"}
            default:
                break;
            }
    }
}

export {PerformanceData}