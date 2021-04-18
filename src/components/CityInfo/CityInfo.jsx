import React from 'react'
import PropTypes from 'prop-types'
//Componente para mostrar textos
import Typography from '@material-ui/core/Typography'

const CityInfo = ({ city, country }) => {
    return (
        <React.Fragment>
            <Typography display="inline" variant="h4">{city}, </Typography>
            <Typography display="inline" variant="h6">{country}</Typography>
       </React.Fragment>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired 
}

export default CityInfo

