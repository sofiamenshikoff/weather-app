import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from './../utils/serviceCities'



const MainPage = () => {
    const history = useHistory()
    
    const onClickHandler = useCallback((city, countryCode) => {
        console.log("City", city)
        console.log("CountryCode", countryCode)
        //history.push permite alterar la url y cambiarla
        history.push(`/city/${countryCode}/${city}`)
    }, [history])

    return ( 
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    cities={getCities()}
                    onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
