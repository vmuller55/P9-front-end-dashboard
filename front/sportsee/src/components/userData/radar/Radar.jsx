import React from "react";
import { ResponsiveContainer, PolarGrid, PolarAngleAxis, Radar, RadarChart, } from "recharts";
/**
 * Build radarChart with sort data. Add "type" and "index" object
 * @param {Object}  
 * @returns 
 */
const RadarChartThree = ({ perfData }) => {
		const type = [
			{ type: 'Intensité', index : 6},
			{ type: 'Cardio', index: 1},
			{ type: 'Energie', index: 2},
			{ type: 'Endurance', index: 3},
			{ type: 'Force', index: 4},
			{ type: 'Vitesse', index: 5},
		]
		const addType= () => {
			for(let i = 0; i<perfData.data.length; i++){
				for(let j = 0; j<type.length; j++) {
					if(perfData.data[i].kind === type[j].index){
						Object.assign(perfData.data[i], type[j])
					}
				}
			}
		}

		addType();
		
		perfData.data.sort((a,b) => {
			return b.index-a.index
		})
	
	return (
		<div className="radarChart" style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<RadarChart cx="50%" cy="50%" outerRadius={80} data={perfData.data} style={{ backgroundColor: "#282D30", borderRadius: "5px" }}>
					<PolarGrid 
						radialLines={false} 
					/>
					<PolarAngleAxis 
						dataKey={"type"}
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