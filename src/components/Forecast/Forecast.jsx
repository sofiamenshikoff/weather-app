import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState'

const renderForecastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast
    //Siempre que tenemos un item en una lista, es necesario agregarle una key
    //A su vez, para testear es necesario incorporar un identificador único
    //Vamos a poner una marca para encontrar cada item (forecastItem)
    return (
        <Grid 
            item 
            key={`${weekDay}${hour}`}
            data-testid="forecast-item-container"
            >
            <ForecastItem hour={hour} 
                weekDay={weekDay}
                state={state} 
                temperature={temperature} 
            />
        </Grid>
    )
}
const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justify="space-around"
            alignItems="center">
                {
                    forecastItemList.map(forecast => renderForecastItem(forecast))
                }

        </Grid>
    )
}


//forecastItemList es un array de elementos
//los elementos deben tener una "forma" en particular
//las siguientes propiedades:
/*
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired
*/

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired   
    })).isRequired
}

export default Forecast
