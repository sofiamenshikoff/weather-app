import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import { getCityCode  } from './../utils/utils'
import getAllWeather from '../utils/transform/getAllWeather'

const useCityList = (cities, allWeather, actions) => {
    console.log(cities)
    /* allWeather
    {
        [Buenos Aires-Argentina]: { temperature: 10, state:"sunny" },
        [Bogota-Colombia]: { temperature: 10, state:"sunny" },...
    }
    */
    //const weather = { temperature: 10, state:"sunny" }
    
    // const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => { 
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl({ city, countryCode })
            
            try {
                const propName = getCityCode(city, countryCode)
                //onSetAllWeather({[propName]: {}}) //Pido que se generen las propiedades antes de que lleguen con datos para que no se renderice de mas race conditions en el foreach
                actions({type: 'SET_ALL_WEATHER', payload: {[propName]: {}}})
                const response = await axios.get(url)
            
                const allWeatherAux = getAllWeather(response, city, countryCode)  
                  
                console.log(allWeatherAux)
                //setAllWeather(allWeather => ({...allWeather, ...allWeatherAux}))
                //onSetAllWeather(allWeatherAux) //tiene que llegar como parametro al useCityList
                actions({type: 'SET_ALL_WEATHER', payload: allWeatherAux})
                

            } catch (error) {
                if (error.response) { //Errores que nos responde el server, esta mal la url por ej
                    
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) { //Errores que suceden por no llegar al server, la quedo el wifi por ej
                    
                    setError("Verifique la conexión a internet")
                } else { //Errores imprevistos
                    console.log(error)
                    setError("Error al cargar los datos")
                }
            }
        }
        cities.forEach( ({ city, countryCode }) => {
            // console.log(allWeather)
            // console.log(city)
            // console.log(countryCode)
            // console.log(getCityCode(city, countryCode))
            if(!allWeather[getCityCode(city, countryCode)]) {// va a encontrar objetos vacios por lo que no va a ser indefinido
                setWeather(city, countryCode)
            } 
        })  
    }, [cities, allWeather, actions])//cuando cities se modifique, el useEffect se tiene que volver a ejecutar
    //hay que poner onSetAllWeather en las dependencias porque si llega a cambiar esa funcion se va a ejecutar nuevamente 

    return{ error, setError }//Podemos retornarlo como array u objeto
}

export default useCityList