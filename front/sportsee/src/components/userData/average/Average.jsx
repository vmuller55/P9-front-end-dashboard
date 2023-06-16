import React from "react"
import {LineChart,Tooltip, XAxis, YAxis, Line, ResponsiveContainer, Rectangle, CartesianGrid, Legend} from "recharts"

function UserAverageSessions({averageSessionData}) {
    const CustomTooltipSessions = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div style={{ color: "black", backgroundColor: "white", lineHeight: "25px", textAlign: "center", width: "39px", height: "25px", fontSize: "8px", marginLeft: "7px", }} className="custom-tooltip-sessions">
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomCursor = ({ points }) => {
        return (
            <Rectangle fill="#000000" opacity={0.2} x={points[0].x} width={98} height={300}/>
        );
    };

    const renderLegend = () => {
        return (
            <p style={{ width: "120px", color: "white", opacity: "0.5" }}> Durée moyenne des sessions </p>
        );
    };

    return (
        <div className="linearChart" style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<LineChart width={300} height={300}
					data={averageSessionData.sessions}
					margin={{top: 80, right: 30, left: 20, bottom: 10,}}
					style={{ background: "#FF0000", borderRadius: "5px" }}>
					<CartesianGrid vertical={false} horizontal={false} />
					<defs>
						<linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4032} />
							<stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
						</linearGradient>
					</defs>
					<XAxis 
						dataKey='dayLetter' 
						dy={10} tickLine={false} 
						axisLine={false} 
						tick={{ fill: "white", opacity: "0.5" }}
					/>
					<YAxis 
						dataKey="sessionLength" 
						domain={["dataMin - 10", "dataMax"]} 
						hide
					/>
					<Tooltip 
						labelStyle={{ color: "black", fontSize: 8 }} 
						contentStyle={{ border: "none", width: "39px", height: "25px" }} 
						content={<CustomTooltipSessions />} 
						cursor={<CustomCursor />} 
						wrapperStyle={{ outlineStyle: "none" }} 
					/>
					<Line 
						type="natural" 
						dataKey="sessionLength" 
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 3, stroke: "white" }}
						stroke="url(#colorUv)"
					/>
					<Legend
						wrapperStyle={{
							margin: "-3rem 1rem",
						}}
						fontWeight={500}
						verticalAlign="top"
						align="left"
						content={renderLegend}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
    )
}

export default UserAverageSessions