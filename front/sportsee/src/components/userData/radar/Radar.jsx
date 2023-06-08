import React from "react";

import {
	ResponsiveContainer,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	RadarChart,
} from "recharts";

/**
 * Component that displays the radarChart called in the dashboard page
 * @component
 * @param {Array<Object>} dataPerformance
 *
 */

const RadarChartThree = ({ dataPerformance }) => {

    const type = [
        { type: 'cardio'},
        { type: 'energie'},
        { type: 'endurance'},
        { type: 'force'},
        { type: 'vitesse'},
        { type: 'intensité'},
    ]
    
    const addType= () => {
        for(let i = 0; i<dataPerformance.data.length; i++){
			if(dataPerformance.data[i].kind === i+1){
				Object.assign(dataPerformance.data[i], type[i])
			}
        }
    }
    addType();
    
	return (
		<div className="radarChart" style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<RadarChart
					cx="50%"
					cy="50%"
					outerRadius={80}
					data={dataPerformance.data}
					style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
				>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="type"
						tick={{ fill: "white", fontSize: "12px" }}
						tickSize={15} 
						dy={5}
					/>

					<Radar
						dataKey="value"
						stroke="##FF0000"
						fill="#FF0000"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RadarChartThree;