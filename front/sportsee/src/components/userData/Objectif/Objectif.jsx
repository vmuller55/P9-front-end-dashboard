import React from "react";
import { ResponsiveContainer, Pie, PieChart,} from "recharts";


/**
 * Component that displays the pieChart called in the dashboard page
 * @component
 * @param {Array<Object>} dataMainData
 *
 */

const ObjectifChart = ({ mainData }) => {
	const data = [
		{ name: 'Score', value: mainData.scorePourcent},
	]
	return (
		<div className="objectifChart" style={{ minWidth: "258px", height: "263px", backgroundColor: "#FBFBFB", borderRadius: "5px",}}>
			<ResponsiveContainer>
				<PieChart width={50} height={50}>
					<Pie 
						data={data} dataKey="value"
						cx="50%" cy="50%" 
						startAngle={170} endAngle={170 - (mainData.scorePourcent * 360) / 100} 
						innerRadius={80} outerRadius={90} cornerRadius={5}
						fill="#FF0000" 
					/>	
					<Pie 
						data={data} dataKey={"value"}
						cx="50%" cy="50%" 
						startAngle={170} endAngle={-190} 
						innerRadius={0} outerRadius={80} 
						fill="white"
					/>
					<text x={20} y={50}>
						Score
					</text>
					<text x="41%" y="45%" fontSize="24px" fontWeight={900}>
						{`${mainData.scorePourcent} %`}
						<tspan x="36%" y="46%" dy={20} fontWeight={500} fontSize="16px" letterSpacing="0.6" >de votre</tspan>
						<tspan x="38%" y="46%" dy={40} fontSize="16px" fontWeight={500}>objectif</tspan>
					</text>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ObjectifChart;