import React from "react";
import { ResponsiveContainer, PolarGrid, PolarAngleAxis, Radar, RadarChart, } from "recharts";
/**
 * Build radarChart with sort data. 
 * @param {Object}  
 * @returns 
 */
const RadarChartThree = ({ perfData }) => {

	perfData.data.sort((a,b) => {
		return b.kind-a.kind
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