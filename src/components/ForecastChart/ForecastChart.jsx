import React, { useMemo} from 'react'
import PropTypes from 'prop-types'
import { CartesianGrid, 
    LineChart, 
    Line,
    XAxis, 
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer } from 'recharts'

const ForecastChart = ({ data }) => {
    const marginSize = useMemo(() => ({top: 20, bottom: 20, left: 5, right: 5}), [])
    
    return (
        <ResponsiveContainer height={250} width="95%">
            <LineChart
                margin={marginSize}
                data={data}>
                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line type="monotone" stroke="#FF0000" dataKey="max"/>
                <Line type="monotone" stroke="#0000FF" dataKey="min"/>
            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        dayHour: PropTypes.string.isRequired,
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }))

}

export default ForecastChart
