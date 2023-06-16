import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import './daily.css'

function DailyChart({ activityData }) {
    /**
     * Custom Tooltip
     * @param {*} param0 
     * @returns 
     */
    const CustomTooltip=({active, payload})=>{
        if (active) {
            return (
                <div className="customTooltip">
                    <p className="tooltipData">{`${payload[0].value} `}kg</p>
                    <p className="tooltipData">{`${payload[1].value} `}Kcal</p>
                </div>
            );
        }
        return null;
    }
    
    return (
        <div className="activityChart">
            <ResponsiveContainer >
                <BarChart 
                    data={activityData} 
                    margin={{ top: 77, right: 30, left: 43, bottom: 5, }} 
                    barSize={7} 
                    barGap={8}
                >
                    <CartesianGrid 
                        strokeDasharray="1" 
                        vertical={false} 
                    />
                    <XAxis 
                        className='activityXAxis' 
                        tickLine={false} 
                        dataKey={'dayNum'} 
                        stroke=" #DEDEDE" 
                        tick={{fill:"#9B9EAC", fontWeight:500, fontSize:14}} 
                        padding={{ left: -47, right: -48 }} 
                        tickMargin={16} 
                    />
                    <YAxis 
                        yAxisId={'left'}
                        hide
                    />
                    <YAxis 
                        yAxisId={'right'} 
                        tickCount={3} 
                        domain={['dataMin -1' , 'dataMax' ]} 
                        tickLine={false} 
                        axisLine={false} 
                        orientation="right"  
                        tick={{fill:"#9B9EAC", fontWeight:500, fontSize:14}} 
                        tickMargin={45} 
                        minTickGap={27}
                    />
                    <Tooltip 
                        content={<CustomTooltip />} 
                        wrapperStyle={{width: "2.44rem", height: "3.94rem", outline: "none", backgroundColor: "#FF0000", fontSize:"10px", color:"white", textAlign:"center"}}
                     />
                    <Legend 
                        className='activityLegend' 
                        verticalAlign='top' 
                        align='right' 
                        iconType={"circle"} 
                        iconSize={8} 
                        width={277} 
                        height={25} 
                        wrapperStyle={{ top: 35, right: 20 }}
                    />
                    <Bar 
                        yAxisId={'right'}
                        dataKey="kilogram"
                        name="Poids (kg)"
                        fill="#282D30"
                        radius={[3, 3, 0, 0]}
                    />
                    <Bar 
                        yAxisId={'left'}
                        dataKey={"calories"}
                        name="Calories brulées (kCal)"
                        fill="#E60000"
                        radius={[3, 3, 0, 0]}
                    />
                    <text className='graphTitle' x="4%" y="15%" width={147} height={48} fill="#20253A" style={{ fontWeight:500}}>
                        Activité quotidienne
                    </text>
                </BarChart>
            </ResponsiveContainer>
      </div>
    );
  }

  export default DailyChart